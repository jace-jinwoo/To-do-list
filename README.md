# To-do-list

## Skill Tree
### Backend
- Node / Express
- MySQL / DBeaver

### Frontend
- PostMan
- React


## Install node and run server using express
1. NVM 설치
2. Node 설치
   - `node -v`: 설치 여부 확인
3. `npm init`
   - package.json
   - Entry point: index.js 파일 생성 
4. Express 설치
   - body-parser 모듈 설치
   - nodemon 모듈 설치
   - PostMan 설치 후 Request 테스트


## Install MySQL and create DB, table using DBeaver
1. MySQL 설치
   - Prerequisite: Visual Studio SQL
2. DBeaver 설치
   - DB 생성
   - Table 생성


## Manage private info
1. 개인 정보 관련 소스코드는 Git remote repository 에 올라가지 않도록 처리 필요
2. 별도의 파일로 관리하여 .gitignore 에 추가
3. 실행 환경(로컬, 배포)에 따라 분기 처리


## Install react using CRA (Tried using Vite... But it is not working with react-router-dom v6)
1. React 설치 
  - `npx create-react-app .`
  - `npm install`
2. ESLint-Prettier 설치
3. React-router-dom 설치


## Receive data by requesting API from server
1. Server (Node)
   - 라우터 추가
2. Client (React)
   - axios 설치
   - instance 설정 (baseURL)
3. CORS (Cross Origin Resource Sharing) 정책에 대한 해결책   
   1) Server - 응답 헤더의 Access-Control-Allow-Origin 설정
   2) Server / Client - CORS 를 처리해주는 Proxy MiddleWare 추가   
   3) Client - Chrome extension
  
## Login
