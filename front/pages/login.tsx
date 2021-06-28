import { loginRequestAction } from 'actions/actionUser';
import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormLayout, {
  ButtonContainer,
  InputContainer,
} from 'components/Layouts/FormLayout';
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
        <title>community - 로그인</title>
      </Head>
      <FormLayout>
        <h1>로그인</h1>
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
            <Button type="primary" size="large" htmlType="submit" loading={logInLoading}>
              로그인
            </Button>
            <Link href="/signup">
              <a>
                <Button size="large" htmlType="submit">
                  회원가입
                </Button>
              </a>
            </Link>
          </ButtonContainer>
        </Form>
      </FormLayout>
    </>
  );
}

export default login;
