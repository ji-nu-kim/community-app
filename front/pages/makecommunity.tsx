import { loadMyInfoRequestAction } from '../actions/actionUser';
import { Form, Button } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import { useForm, Controller } from 'react-hook-form';
import { addCommunityValidation } from '../utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormErrorMessage from 'components/FormErrorMessage';
import SignUpLayout, {
  MainText,
  InputContainer,
  TextAreaContainer,
  ButtonContainer,
} from 'components/Layouts/SignUpLayout';
import CountryModal from 'components/Modals/CountryModal';
import {
  addCommunityRequestAction,
  loadCategoriesReqeustAction,
} from 'actions/actionCommunity';
import { END } from '@redux-saga/core';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';

type SignUpType = {
  communityName: string;
  description: string;
};

function MakeCommunity() {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const {
    mainCategories,
    addCommunityDone,
    addCommunityError,
    addCommunityLoading,
  } = useSelector((state: RootStateInterface) => state.community);

  const [countryModal, setCountryModal] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [categoryError, setcategoryError] = useState(false);
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  useEffect(() => {
    if (addCommunityError) {
      alert(addCommunityError);
    }
  }, [addCommunityError]);

  useEffect(() => {
    if (addCommunityDone) {
      alert('커뮤니티를 생성했습니다');
      setTimeout(() => {
        Router.push('/');
      }, 1000);
    }
  }, [addCommunityDone]);

  const { handleSubmit, errors, control } = useForm<SignUpType>({
    resolver: yupResolver(addCommunityValidation),
    mode: 'onBlur',
  });

  const openCountryModal = useCallback(() => {
    setCountryError(false);
    setCountryModal(true);
  }, []);

  const closeCountryModal = useCallback(() => {
    setCountryModal(false);
  }, []);

  const onChangeCategory = useCallback(e => {
    setCategory(e.target.value);
    setcategoryError(false);
  }, []);

  const onSubmit = useCallback(
    handleSubmit((data: SignUpType) => {
      console.log(category);
      if (country === '') {
        return setCountryError(true);
      }
      if (category === '') {
        return setcategoryError(true);
      }
      dispatch(
        addCommunityRequestAction({
          communityName: data.communityName,
          description: data.description,
          country,
          category,
        })
      );
    }),
    [country, category]
  );

  return (
    <>
      <Head>
        <title>커뮤니티 만들기</title>
      </Head>
      <SignUpLayout>
        <MainText>커뮤니티 만들기</MainText>
        <Form onFinish={onSubmit} className="form-grid">
          <InputContainer>
            <label htmlFor="communityName">커뮤니티 이름</label>
            <br />
            <Controller
              as={<input />}
              type="text"
              name="communityName"
              control={control}
              placeholder="커뮤니티 이름을 입력하세요"
              defaultValue=""
            />
            {errors.communityName?.message && (
              <FormErrorMessage errorMessage={errors.communityName.message} />
            )}
          </InputContainer>

          <TextAreaContainer>
            <label htmlFor="description">커뮤니티소개</label>
            <br />
            <Controller
              as={<textarea />}
              name="description"
              placeholder="최대 140글자까지 입력가능합니다"
              control={control}
              defaultValue=""
            />
            {errors.description?.message && (
              <FormErrorMessage errorMessage={errors.description.message} />
            )}
          </TextAreaContainer>

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

          <label htmlFor="categories">카테고리</label>
          <br />
          <select
            id="categories"
            className="select-category"
            onChange={onChangeCategory}
          >
            <option value="">카테고리를 선택하세요</option>
            {mainCategories.map(v => (
              <option key={v.name} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
          {categoryError && (
            <FormErrorMessage errorMessage="카테고리를 선택하세요" />
          )}

          <ButtonContainer>
            <Button
              type="primary"
              htmlType="submit"
              loading={addCommunityLoading}
            >
              생성하기
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(loadCategoriesReqeustAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default MakeCommunity;
