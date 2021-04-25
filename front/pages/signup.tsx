import { signUpRequestAction } from '../actions/actionUser';
import { Form, Checkbox, Button } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import { useForm, Controller } from 'react-hook-form';
import { signUpValidation } from '../utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormErrorMessage from 'components/FormErrorMessage';
import SignUpLayout, {
  MainText,
  InputContainer,
  ButtonContainer,
} from 'components/Layouts/SignUpLayout';
import CountryModal from 'components/Modals/CountryModal';

type SignUpType = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  term: boolean;
};

function Signup() {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector(
    (state: RootStateInterface) => state.user
  );
  const [countryModal, setCountryModal] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (me && me.id) {
      Router.push('/');
    }
  }, [me]);

  useEffect(() => {
    if (signUpDone) {
      Router.push('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const { handleSubmit, errors, control } = useForm<SignUpType>({
    resolver: yupResolver(signUpValidation),
    mode: 'onBlur',
  });

  const openCountryModal = useCallback(() => {
    setCountryModal(true);
  }, []);

  const closeCountryModal = useCallback(() => {
    setCountryModal(false);
  }, []);

  const onSubmit = useCallback(
    handleSubmit((data: SignUpType) => {
      if (country === '') {
        return setCountryError(true);
      }

      dispatch(
        signUpRequestAction({
          email: data.email,
          nickname: data.nickname,
          password: data.password,
          country,
        })
      );
    }),
    [country]
  );

  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <SignUpLayout>
        <MainText>회원가입</MainText>
        <Form onFinish={onSubmit}>
          <InputContainer>
            <label htmlFor="email">이메일</label>
            <br />
            <Controller
              as={<input />}
              type="email"
              name="email"
              control={control}
              placeholder="아이디를 입력하세요"
              defaultValue=""
            />
            {errors.email?.message && (
              <FormErrorMessage errorMessage={errors.email.message} />
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="nickname">닉네임</label>
            <br />
            <Controller
              as={<input />}
              type="text"
              name="nickname"
              control={control}
              placeholder="닉네임을 입력하세요"
              defaultValue=""
            />
            {errors.nickname?.message && (
              <FormErrorMessage errorMessage={errors.nickname.message} />
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">비밀번호</label>
            <br />
            <Controller
              as={<input />}
              type="password"
              name="password"
              control={control}
              placeholder="비밀번호"
              defaultValue=""
            />
            {errors.password?.message && (
              <FormErrorMessage errorMessage={errors.password.message} />
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <br />
            <Controller
              as={<input />}
              type="password"
              name="passwordCheck"
              control={control}
              placeholder="비밀번호 재입력"
              defaultValue=""
            />
            {errors.passwordCheck?.message && (
              <FormErrorMessage errorMessage={errors.passwordCheck.message} />
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="country">주소</label>
            <br />
            <input
              style={{ cursor: 'pointer' }}
              value={country}
              readOnly
              placeholder="주소를 검색하세요"
              onClick={openCountryModal}
            />
            {countryError && (
              <FormErrorMessage errorMessage="주소를 입력하세요" />
            )}
          </InputContainer>

          <div>
            <Controller
              name="term"
              control={control}
              defaultValue={false}
              render={({ onChange, value }) => (
                <Checkbox
                  onChange={e => onChange(e.target.checked)}
                  checked={value}
                >
                  회원가입에 동의합니다
                </Checkbox>
              )}
            />
            {errors.term?.message && (
              <FormErrorMessage errorMessage={errors.term.message} />
            )}
          </div>

          <ButtonContainer>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={signUpLoading}
            >
              가입하기
            </Button>
          </ButtonContainer>
        </Form>
        {countryModal && (
          <CountryModal
            closeCountryModal={closeCountryModal}
            setCountry={setCountry}
          />
        )}
      </SignUpLayout>
    </>
  );
}

export default Signup;
