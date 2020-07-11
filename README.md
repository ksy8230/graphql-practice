### 세팅

1. 서버 만들기
- `graphql-yoga` 설치
- `babel` 설치 - 최신 문법 사용하기 위해

2. 스키마 만들기
- 받거나 줄 데이터에 대한 정보를 기재
- resolvers 파일 : query를 resolve 한다.
(데이터베이스에 query를 던지고 이를 resolver 파일에 적힌대로 해석하게 만든다)

3. playground에서 사용하는 명령어들
- query : 정보를 받을 때 사용
- mutation : 데이터 변형을 의미

graphql은 위와 같은 유형들을 정의한다.
(어떤 mutation, 어떤 query들을 우리가 가졌는지...)

- playground : postman 같은 것으로 데이터베이스를 테스틓볼수 있다

2. 클라이언트 만들기
- `apollo-boost` 설치
- index.js에 ApolloProvider 연결, client 연결
- 데이터를 불러오고자 하는 파일에 쿼리문 작성
- 리액트 훅 함수인 `useQuery`를 이용해 데이터 가져오기