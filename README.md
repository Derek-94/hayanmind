## Hayanmind Assignment

### 결과물 영상 및 배포 주소

---

### 과제 구현 목록

- [x] CRA 초기 세팅
- [x] `HTML` , `CSS` 골격 잡기
  - `styled-component` 사용.
- [x] 디렉토리 구조화
  - `container` , `presenter` 구조 결정.
- [x] 필수 기능 구현.
  - [x] `API` 모듈 생성
  - [x] 무한 스크롤 구현

### 설치 및 시작하는 법

- `git clone https://github.com/Derek-94/hayanmind.git`
  </br>
- `yarn install`
  </br>
- `yarn start`

### 프로젝트 구조 설명

- `Container` 에서 렌더링에 필요한 데이터를 `fetch` 한다.
  </br>
- `presenter` 는 `props` 로 `fetch` 결과물을 받아 렌더링을 한다.
