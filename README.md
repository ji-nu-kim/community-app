# 커뮤니티

- 취미를 공유하고 함께 성장하기

## 로그인 기능 구현

- react-hook-form으로 state을 관리하고 yup으로 검증
- react-daum-postcode로 주소 찾기

## 자식태그가 click되는 것을 방지

- ul태그를 클릭하면 각 li태그의 클래스명을 알아내 활성화 시키도록 했다
- li태그 안에는 icon이 들어있는 span태그가 있다(아이콘 부분을 클릭하면 svg가 잡혔다)
- css에서 span태그에 pointer-events: none으로 설정해 클릭되는 것을 막았다
