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

export const createCommunityValidation = yup.object({
  communityName: yup.string().required('커뮤니티이름을 입력하세요'),
  description: yup
    .string()
    .required('커뮤니티를 소개하세요')
    .max(140, '최대 140글자까지 입력가능합니다'),
});
