import express from "express"; //express임포트
import morgan from "morgan";

const PORT = 4000; //4000서버사용

const app = express(); //서버연결
const logger = morgan("dev");


const home = (req, res) => {
    console.log("I will respond.");
    return res.send("hello");
};
const login = (req, res) => {
    return res.send("login");
}

app.use(logger); //미들웨어를 애플리케이션 에 바인딩하기위한 것
app.get("/", home) //Express의 응용 프로그램 라우팅의 일부이며 요청 될 때 특정 경로를 일치시키고 처리하기위한 것
app.get("/login", login);


//서버에서 요청을 듣고 콜백
const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);