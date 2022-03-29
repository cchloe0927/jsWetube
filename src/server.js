import express from "express"; //express임포트
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000; //4000서버사용

const app = express(); //서버연결
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//app.use() -> 미들웨어를 애플리케이션 에 바인딩하기위한 것
//app.get() -> Express의 응용 프로그램 라우팅의 일부이며 요청 될 때 특정 경로를 일치시키고 처리하기위한 것

//서버에서 요청을 듣고 콜백
const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);