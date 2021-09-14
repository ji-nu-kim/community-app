# 😊community

# ![메인페이지](./images/indexpage.png '메인페이지')

## ✨ 프로젝트 소개

- 모임 서비스앱
- 더 많은 사람들과 함께 취미를 즐겨요
- 데모사이트: https://jinu-community.site/
- 테스트ID: aaa@naver.com PW: 123123123

---

## ✨ 사용한 기술

### 프론트엔드

- React, Next
- Typescript
- React-hook-form, yup
- redux, redux-saga
- styled-component

### 백엔드

- express
- sequelize

---

## ✨ 기능

1. 서버사이드 렌더링

```js
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(loadCommunitiesRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });
```

2. 유효성 검사

```js
const { handleSubmit, errors, control } =
  useForm <
  SignUpType >
  {
    resolver: yupResolver(addCommunityValidation),
    mode: 'onBlur',
  };

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
```

3. 카카오맵 API

```js
let container = document.getElementById(`map${number}`);

    let geocoder = new (window as any).kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (results: any, status: any) {
      if (status === (window as any).kakao.maps.services.Status.OK) {
        let result = results[0];

        let options = {
          center: new (window as any).kakao.maps.LatLng(result.y, result.x),
          level: 5,
        };
        let map = new (window as any).kakao.maps.Map(container, options);

        let marker = new (window as any).kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        let iwContent = `<div style="padding:5px;"><a href="https://map.kakao.com/link/search/${result.address_name}" target="_blank" rel="noreferer">큰 지도 보기</a></div>`;
        let iwRemoveable = true;
        let infowindow = new (window as any).kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });
        new (window as any).kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    });
```

4. typescript

```js
export interface ICommunity {
  id: number;
  communityName: string;
  description: string;
  caution?: string;
  requirement?: string;
  profilePhoto: string;
  createdAt: Date;
  updatedAt: Date;
  country: string;
  Users: IUserInfo[];
  JoinUsers: IUserInfo[];
  Categories: ICategory[];
  OwnerId: number;
  Meets: IMeet[];
}
```

5. API

- 유저 : 회원가입, 로그인, 프로필수정, 주소수정, 회원탈퇴, 알림체크, 알림삭제
- 커뮤니티 : 커뮤니티 생성, 수정, 삭제, 탈퇴, 가입신청, 가입승인, 가입거절
- 게시글, 댓글 : 게시글 생성, 수정, 삭제, 신고, 댓글 생성, 수정, 삭제, 신고
- 모임 : 모임 생성, 수정, 삭제, 가입, 탈퇴

---

## ✨페이지

## **1. 인덱스 페이지**

# ![인덱스](./images/indexpage.png '인덱스')

- 사이트 접속시 처음 보여지는 페이지입니다
- 새롭게 생성된 커뮤니티 21개를 보여줍니다

### 1-1. 인덱스 페이지(로그인시)

# ![인덱스 로그인](./images/indexloginpage.png '인덱스 로그인')

- 사이드바의 커뮤니티메뉴에 가입한 커뮤니티가 표시됩니다
- 헤더에 유저정보, 알림 버튼이 표시됩니다
- 읽지 않은 알림을 아이콘 위에 숫자로 표시합니다
- 가입시 설정한 동네의 커뮤니티를 보여줍니다

### 1-2. 유저알림창

# ![유저알림](./images/usernotificationmodal.png '유저알림')

- 알림버튼을 클릭하면 읽음처리되며 아이콘 위의 숫자가 사라집니다
- 알림을 삭제할 수 있습니다

### 1-3. 유저정보창

# ![유저알림](./images/headeruserinfomodal.png '유저알림')

- 유저아이디가 표시된 버튼을 클릭하면 유저정보창이 나타납니다
- 프로필 버튼을 누르면 프로필 페이지로 이동합니다
- 로그아웃 버튼을 누르면 로그아웃됩니다
- 회원탈퇴 버튼을 누르면 회원탈퇴됩니다  
  (커뮤니티를 전부 탈퇴한 상태에서만 회원탈퇴가 가능합니다)

## **2. 카테고리 페이지**

# ![카테고리](./images/categorypage.png '카테고리')

- 카테고리 별로 커뮤니티를 찾아볼 수 있습니다

# ![카테고리세부](./images/categorypagegame.png '카테고리세부')

- 카테고리를 클릭하면 해당하는 커뮤니티를 보여줍니다

## **3. 검색 페이지**

# ![검색](./images/searchpage.png '검색')

- 검색페이지에 들어오면 헤더에 검색창이 표시됩니다
- 키워드로 커뮤니티를 검색할 수 있습니다

# ![검색키워드](./images/searchpageinputlakers.png '검색키워드')

- 키워드를 입력하면 연관된 커뮤니티를 보여줍니다

## **4. 로그인 페이지**

# ![로그인](./images/loginpage.png '로그인')

- 로그인하지 않은 유저만 접근 할 수 있는 페이지입니다
- 회원가입 버튼을 클릭해 회원가입 페이지로 이동할 수 있습니다

## **5. 회원가입 페이지**

# ![회원가입](./images/signuppage.png '회원가입')

# ![회원가입주소](./images/signuppageaddress.png '회원가입주소')

- 유효성 검사를 위해 react-hook-form, yup을 사용했습니다
- 주소검색을 위해 react-daum-postcode를 사용했습니다

## **6. 커뮤니티 만들기 페이지**

# ![커뮤니티만들기](./images/makecommunitypage.png '커뮤니티만들기')

# ![커뮤니티만들기유효성](./images/makecommunitypagevalidate.png '커뮤니티만들기유효성')

- 로그인한 유저만 접근할 수 있는 페이지입니다
- 유효성 검사를 위해 react-hook-form, yup을 사용했습니다

## **7. 유저 프로필 페이지**

# ![유저프로필](./images/userprofilepage.png '유저프로필')

- 유저의 프로필정보를 보여주는 페이지입니다
- 카테고리,커뮤니티 리스트를 카드형식으로 보여줍니다
- 수정하기를 통해 프로필을 수정할 수 있습니다
- 주소를 클릭하면 주소를 수정할 수 있습니다

### 7-1. 프로필 수정창

# ![프로필수정](./images/profilemodifymodal.png '프로필수정')

- 프로필 이미지, 닉네임, 카테고리를 수정할 수 있습니다

### 7-2. 주소 수정창

# ![주소수정](./images/usercountrymodifymodal.png '주소수정')

- 주소를 수정할 수 있습니다

## **8. 커뮤니티 페이지**

#### 8-1. 커뮤니티 정보창

# ![커뮤니티 정보](./images/communitypage.png '커뮤니티 정보')

- 사이드바에 현재 보고있는 커뮤니티가 진하게 표시됩니다
- 커뮤니티 헤더의 오른쪽에 커뮤니티와 관련된(수정, 삭제, 회원승인) 버튼이 있습니다.
- 커뮤니티 바디에는 커뮤니티 정보가 있습니다

# ![커뮤니티 가입신청창](./images/joinusermodal.png '커뮤니티 가입신청창')

- 유저아이콘을 클릭하면 가입신청한 유저를 확인 할 수 있습니다.
- 유저와 관련된 정보가 있고 승인, 거절 버튼을 눌러 신청결과를 처리할 수 있습니다.
- 결과가 처리되면 창에서 유저정보가 사라지고 뱃지에 표시된 인원 수에서 제외됩니다.

# ![커뮤니티 유저창](./images/communityusersmodal.png '커뮤니티 유저창')

- 커뮤니티 회원칸을 클릭하면 커뮤니티 회원창이 나옵니다
- 현재 커뮤니티에 가입되어있는 유저리스트가 표시됩니다

# ![커뮤니티 프로필 수정창](./images/communityprofilemodifymodal.png '커뮤니티 프로필 수정창')

- 커뮤니티 프로필 버튼을 클릭하면 커뮤니티 수정하기창이 나옵니다
- 커뮤니티의 정보를 수정할 수 있습니다
- 커뮤니티 리더만 사용할 수 있는 기능입니다

#### 8-2. 커뮤니티 게시글창

# ![커뮤니티 게시글](./images/communitypost.png '커뮤니티 게시글')

- 사진과 글을 올릴 수 있습니다
- 게시글은 커뮤니티 회원에게만 공개됩니다
- 게시글 헤더의 버튼을 클릭하면 게시글 작성자는 게시글 수정,삭제할 수 있습니다

# ![커뮤니티 댓글](./images/communitycomment.png '커뮤니티 댓글')

- 게시글 푸터의 댓글영역을 클릭하면 댓글창이 나옵니다
- 댓글을 작성할 수 있고 댓글창 헤더의 버튼을 클릭하면 댓글 수정,삭제 할 수 있습니다
- 게시글에 댓글이 있는 경우 댓글 갯수가 표시됩니다

#### 8-3. 커뮤니티 모임창

# ![커뮤니티 모임](./images/communitymeet.png '커뮤니티 모임')

- 모임을 만들어 커뮤니티 회원들과 커뮤니티 활동을 할 수 있습니다
- 전체 모임목록과 참가한 모임목록이 있습니다
- 모임에 참여하면 전체 모임목록에서 참여한 모임이 제거되고 참가한 모임목록에 참여한 모임이 표시됩니다
- 모임카드의 왼쪽에는 모임의 정보, 오른쪽에는 참여한 멤버, 지도가 표시됩니다
- 참가버튼을 눌러 참여할 수 있고 탈퇴버튼을 눌러 탈퇴 할 수 있습니다
- 모임 정원이 꽉차면 버튼이 비활성화됩니다

# ![커뮤니티 모임지도](./images/communitymeetmap.png '커뮤니티 모임지도')

- 모임정보의 장소를 클릭하면 오른쪽에 지도가 나타납니다
- 마커를 클릭하면 카카오지도로 연결됩니다

# ![커뮤니티 모임만들기](./images/communitymakemeet.png '커뮤니티 모임만들기')

- 모임창 하단의 +버튼을 클릭하면 모임을 생성할 수 있습니다
