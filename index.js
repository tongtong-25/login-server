// 1. 필요한 모듈 불러오기
const express = require('express');
const cors = require('cors');

// 2. express 실행 > app 만들기
const app = express();

// 3. 미들웨어 설정
app.use(cors());
app.use(express.json());

// 4. 기본 테스트 라우트
app.get('/', (req, res) => {
  res.send('✅ 서버가 정상적으로 작동 중입니다!');
});

// 5. 로그인 POST 라우터
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("📥 받은 이메일:", email);
  console.log("📥 받은 비밀번호:", password);

  if (email === "admin@example.com" && password === "1234") {
    res.json({ message: `🎉 로그인 성공! 어서오세요, ${email}님` });
  } else {
    res.json({ message: `❌ 로그인 실패: 이메일 또는 비밀번호가 다릅니다.` });
  }
});

// 6. 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});