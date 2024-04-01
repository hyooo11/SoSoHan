# 소소한 하루를 기록하는 블로그, SoSoHan

<p align="center">
  <img width="100%" src="https://github.com/hyooo11/WaggleWaggle/assets/98132929/779e4752-d124-48cc-ab2a-13359d2d125a"/>
</p>

## 💁 프로젝트 소개

- 소소한 하루의 일과를 기록하고 댓글을 통해 소통 할 수 있는 블로그
- 간단한 사진과 글을 저장하고 공유

## ✅ 프로젝트 배포

이 프로젝트는 [Vercel](https://vercel.com/)을 사용하여 배포되었습니다.<br>

> main 브랜치에서 build 명령어 입력 후 커밋 시 자동 배포

```bash
  npm run build
```

- 배포 URL
  - https://so-so-han.vercel.app/
- 테스트 계정
  - 아이디 : test002
  - 비밀번호 : 12345678

## 🔍 개발기간

2024.3.5 ~ ing<br>

## 👤 팀원 구성

  <table>
    <thead>
      <tr>
        <td align="center">
          <a href="https://github.com/ssac17" target="_blank">황하늘</a>
        </td>
        <td align="center">
          <a href="https://github.com/hyooo11" target="_blank">신효진</a>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://github.com/ssac17" target="_blank">
            <img src="https://github.com/hyooo11/SoSoHan/assets/98132929/4fcbdab9-0ad5-4b49-983f-57489b3f1290" width="180px;" alt="프로필 이미지"/>
            <br/>
            <sub><b>Backend</b></sub>
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/hyooo11" target="_blank">
            <img src="https://github.com/hyooo11/SoSoHan/assets/98132929/e9610a3d-408a-4c3c-a383-fe1b9aea61b4" width="180px;" alt="프로필 이미지"/>
            <br />
            <sub><b>Frontend & Design</b></sub>
          </a>
        </td>
      </tr>
    </tbody>
  </table>

## ⚙ 기술스택

#### 🔍 Frontend

<div>
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

## 🗂️ 프로젝트 구조

```bash
.
.
.
📦public # 이미지, 폰트 파일
 ┣ 📂font
 ┗ 📂media
📦src
 ┣ 📂api
 ┃ ┣ 📜ProfileAPI.ts
 ┃ ┣ 📜commentAPI.ts
 ┃ ┗ 📜postAPI.ts
 ┣ 📂app # 라우팅
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂join
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┗ 📂social-login
 ┃ ┣ 📂detail
 ┃ ┣ 📂my
 ┃ ┣ 📂post
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂component # 재사용 컴포넌트
 ┃ ┣ 📂auth
 ┃ ┣ 📂detail
 ┃ ┣ 📂home
 ┃ ┣ 📂my
 ┃ ┣ 📂post
 ┃ ┣ 📜BottomMenu.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜NavMenu.tsx
 ┃ ┗ 📜PostSearch.tsx
 ┣ 📂recoil # 상태관리
 ┣ 📂types # 재사용 type정의
 ┣ 📂ui # 재사용 되는 ui 컴포넌트
 ┣ 📂util
 ┗ 📜middleware.ts
.
.
.

```

## 📌 페이지별 주요기능

로그인시 이용 가능한 기능에는 👤 표시가 있습니다.<br>
테스트 계정은 상단에서 확인이 가능합니다.

#### 회원가입 - [바로가기](https://so-so-han.vercel.app/auth/join)

#### 로그인 - [바로가기](https://so-so-han.vercel.app/auth/login)

#### 게시물 리스트 - [바로가기](https://so-so-han.vercel.app/)

#### 게시물 상세페이지 - [바로가기](https://so-so-han.vercel.app/)

#### 댓글등록 및 수정 - [바로가기](https://so-so-han.vercel.app/)

#### 프로필 이미지 수정 - [바로가기](https://so-so-han.vercel.app/)

## 💡 Reference

- 규칙적인 깃 커밋 메세지 위한 [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
