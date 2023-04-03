# Blog for Coding Test

> 블로그를 구현하는 코딩 테스트 저장소입니다.  
> 과제에 대한 자세한 설명은 Notion 페이지로 제공됩니다.

---

## 배포 링크

> https://coding-test-blog.vercel.app/

## 로컬 실행 방법

```shell
    # 패키지 설치
    npm install

    # 로컬 서버 실행
    npm run dev
```

## 사용한 기술

- **React.js**
- **TypeScript**
- **TailwindCSS**
- **SWR**
- **Recoil**
- **Axios**

## 구현 내용

- Issue 1 : 사이트 레이아웃 구성

  - [ISSUE] https://github.com/hyejj19/coding-test-blog/issues/2
  - [PR] https://github.com/hyejj19/coding-test-blog/pull/11

- Issue 2 : 블로그 List 페이지에 데이터 연결

  - [ISSUE] https://github.com/hyejj19/coding-test-blog/issues/8
  - [PR] https://github.com/hyejj19/coding-test-blog/pull/20

- Issue 3 : 페이지네이션 구현

  - [ISSUE] https://github.com/hyejj19/coding-test-blog/issues/21
  - [PR] https://github.com/hyejj19/coding-test-blog/pull/29

- Issue 4 : 블로그 View 페이지에 데이터 연동

  - [ISSUE] https://github.com/hyejj19/coding-test-blog/issues/30
  - [PR] https://github.com/hyejj19/coding-test-blog/pull/35

- Issue 5 : Vercel 배포

  - [ISSUE] https://github.com/hyejj19/coding-test-blog/issues/38

- Issue 6 : 다크모드, 로딩스피너 등 적용
  - [ISSUE] https://github.com/hyejj19/coding-test-blog/issues/39

## 진행 방식

> 1. 이슈 생성 후 서브 태스크를 만들어 이슈로 관리
> 2. 서브 이슈 별로 브랜치 생성하여 작업
> 3. 서브 이슈 -> 이슈 브랜치에 merge 후 최종적으로 이슈 태스크가 완료되었을 때 main 브랜치에 merge

## Git commit message

|   태그   |         설명          |
| :------: | :-------------------: |
|   feat   |   새로운 기능 추가    |
|   fix    |       버그 수정       |
|   docs   |         문서          |
|  style   | css 관련 추가 및 수정 |
| refactor |     코드 리팩토링     |
|  chore   |       기타 수정       |
