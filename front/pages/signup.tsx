import { signUpRequestAction } from '../actions/actionUser';
import { Form, Checkbox, Button } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import { useForm, Controller } from 'react-hook-form';
import { signUpValidation } from '../utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpLayout, {
  InputContainer,
  ButtonContainer,
} from 'components/Layouts/FormLayout';

const FormErrorMessage = dynamic(() => import('components/Message/FormErrorMessage'));
const SearchAddressModal = dynamic(() => import('components/Modals/SearchAddressModal'));

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

  const [showSearchAddressModal, setShowSearchAddressModal] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [country, setCountry] = useState('');

  useEffect(() => {
    if ((me && me.id) || signUpDone) {
      Router.push('/');
    }
  }, [me, signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const { handleSubmit, errors, control } = useForm<SignUpType>({
    resolver: yupResolver(signUpValidation),
    mode: 'onBlur',
  });

  const openSearchAddressModal = useCallback(() => {
    setCountryError(false);
    setShowSearchAddressModal(true);
  }, []);

  const closeSearchAddressModal = useCallback(() => {
    setShowSearchAddressModal(false);
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
        <title>community - ????????????</title>
      </Head>
      <SignUpLayout>
        <h1>????????????</h1>
        <Form onFinish={onSubmit} className="form-grid">
          <InputContainer>
            <label htmlFor="email">?????????</label>
            <br />
            <Controller
              as={<input />}
              type="email"
              name="email"
              control={control}
              placeholder="???????????? ???????????????"
              defaultValue=""
            />
            {errors.email?.message && (
              <FormErrorMessage errorMessage={errors.email.message} />
            )}
          </InputContainer>

          <InputContainer>
            <label htmlFor="nickname">?????????</label>
            <br />
            <Controller
              as={<input />}
              type="text"
              name="nickname"
              control={control}
              placeholder="???????????? ???????????????"
              defaultValue=""
            />
            {errors.nickname?.message && (
              <FormErrorMessage errorMessage={errors.nickname.message} />
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">????????????</label>
            <br />
            <Controller
              as={<input />}
              type="password"
              name="password"
              control={control}
              placeholder="????????????"
              defaultValue=""
            />
            {errors.password?.message && (
              <FormErrorMessage errorMessage={errors.password.message} />
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="passwordCheck">???????????? ??????</label>
            <br />
            <Controller
              as={<input />}
              type="password"
              name="passwordCheck"
              control={control}
              placeholder="???????????? ?????????"
              defaultValue=""
            />
            {errors.passwordCheck?.message && (
              <FormErrorMessage errorMessage={errors.passwordCheck.message} />
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor="country">??????</label>
            <br />
            <input
              style={{ cursor: 'pointer' }}
              value={country}
              readOnly
              placeholder="????????? ???????????????"
              onClick={openSearchAddressModal}
            />
            {countryError && <FormErrorMessage errorMessage="????????? ???????????????" />}
          </InputContainer>
          <div>
            <Controller
              name="term"
              control={control}
              defaultValue={false}
              render={({ onChange, value }) => (
                <Checkbox onChange={e => onChange(e.target.checked)} checked={value}>
                  ??????????????? ???????????????
                </Checkbox>
              )}
            />
            {errors.term?.message && (
              <FormErrorMessage errorMessage={errors.term.message} />
            )}
          </div>
          <ButtonContainer>
            <Button type="primary" size="large" htmlType="submit" loading={signUpLoading}>
              ????????????
            </Button>
          </ButtonContainer>
        </Form>
        {showSearchAddressModal && (
          <SearchAddressModal
            closeSearchAddressModal={closeSearchAddressModal}
            setCountry={setCountry}
            type="village"
          />
        )}
      </SignUpLayout>
    </>
  );
}

export default Signup;
