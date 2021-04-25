import { loginRequestAction } from 'actions/actionUser';
import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import LoginLayout, {
  ButtonContainer,
  InputContainer,
  MainText,
} from 'components/Layouts/LoginLayout';
import useInput from 'hooks/useInput';
import { RootStateInterface } from 'interfaces/RootState';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function login() {
  const dispatch = useDispatch();
  const { me, logInError, logInDone, logInLoading } = useSelector(
    (state: RootStateInterface) => state.user
  );
  const [email, onChangeEmail] = useInput<string>('');
  const [password, onChangePassword] = useInput<string>('');

  useEffect(() => {
    if (me && me.id) {
      Router.push('/');
    }
  }, [me]);

  useEffect(() => {
    if (logInDone) {
      Router.push('/');
    }
  }, [logInDone]);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmit = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <LoginLayout>
        <MainText>로그인</MainText>
        <Form onFinish={onSubmit}>
          <InputContainer>
            <label htmlFor="email">이메일</label>
            <br />
            <input
              name="user-email"
              value={email}
              onChange={onChangeEmail}
              type="email"
              required
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">비밀번호</label>
            <br />
            <input
              name="user-password"
              value={password}
              onChange={onChangePassword}
              type="password"
              required
            />
          </InputContainer>

          <ButtonContainer>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={logInLoading}
              className="login-btn"
            >
              로그인하기
            </Button>
            <Link href="/signup">
              <a>
                <Button size="large" htmlType="submit" loading={logInLoading}>
                  회원가입하기
                </Button>
              </a>
            </Link>
          </ButtonContainer>
        </Form>
      </LoginLayout>
    </>
  );
}

export default login;
