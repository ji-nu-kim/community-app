# 커뮤니티

- 취미를 공유하고 함께 성장하기

## 로그인 기능 구현

- react-hook-form으로 state을 관리하고 yup으로 검증
- react-daum-postcode로 주소 찾기

## 자식태그가 click되는 것을 방지

- ul태그를 클릭하면 각 li태그의 클래스명을 알아내 활성화 시키도록 했다
- li태그 안에는 icon이 들어있는 span태그가 있다(아이콘 부분을 클릭하면 svg가 잡혔다)
- css에서 span태그에 pointer-events: none으로 설정해 클릭되는 것을 막았다

## 커뮤니티 이름에 ?,& 같은 기호 불가능하게 막기

- 라우팅할 때 문제생김, 아니면 해쉬로 바꿔서 사용할수도

## 선택한 카테고리 체크표시 하기

- DB에서 받아온 카테고리들로 체크박스를 만들고 선택한 카테고리에 해당하는 체크박스를 checked한다
- 선택한 카테고리들을 useState의 기본 값으로 저장해두었다([선택한 카테고리] : []);
- [선택한 카테고리].includes(카테고리)로 ture인 input에 checked옵션을 넣었다
- !에러발생
- A component is changing a controlled input of type text to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component
- 비제어 컴포넌트의 경우 defaultChecked를 사용
