// 설치한 라이브러리 불러오기
const express = require('express')
const app = express()
const port = 8080;

app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/img'));

// 누군가 내 사이트에 접속하면 보내는 것
app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/login', (요청, 응답) => {
    응답.sendFile(__dirname + '/login.html');
});

app.get('/register', (요청, 응답) => {
    응답.sendFile(__dirname + '/register.html');
});

app.get('/seatselect', (요청, 응답) => {
    응답.sendFile(__dirname + '/seatselect.html');
});
  
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
