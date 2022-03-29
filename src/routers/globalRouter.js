import express from "express"; //파일들은 하나의 모듈 -> 독립적 / 각 파일마다 환경 세팅해줘야함
import { join, login } from "../controllers/userController"; //컨트롤러 임포트
import { trending, search } from "../controllers/videoCotroller";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

//서버로 익스포트 해줘야 서버에서 임포트 할 수 있음
export default globalRouter;
