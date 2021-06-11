import * as yup from 'yup';

export const signUpValidation = yup.object({
  email: yup.string().required('아이디를 입력하세요'),
  nickname: yup
    .string()
    .required('닉네임을 입력하세요')
    .max(10, '닉네임은 10글자 이하여야 합니다'),
  password: yup
    .string()
    .required('비밀번호를 입력하세요')
    .max(20, '비밀번호는 20자리 이하여야 합니다')
    .min(8, '비밀번호는 8자리 이상이어야 합니다'),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
  term: yup.boolean().oneOf([true], '약관에 동의해주세요'),
});

export const addCommunityValidation = yup.object({
  communityName: yup
    .string()
    .required('커뮤니티이름을 입력하세요')
    .max(10, '커뮤니티 이름은 10글자 이하여야 합니다'),
  description: yup
    .string()
    .required('커뮤니티를 소개하세요')
    .max(140, '최대 140글자까지 입력가능합니다'),
});

export const createMeetValidation = yup.object({
  title: yup
    .string()
    .required('모임 이름을 입력하세요')
    .max(15, '최대 15자리까지 가능합니다'),
  fee: yup.number().min(0).required('참가비를 입력하세요(없으면 0)'),
  members: yup
    .number()
    .min(1, '최소 1명이상이여야 합니다')
    .required('인원 수를 입력하세요'),
  date: yup.date().required('날짜를 입력하세요'),
});
