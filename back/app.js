const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const communityRouter = require('./routes/community');
const communitiesRouter = require('./routes/communities');
const searchRouter = require('./routes/search');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => console.log('db 연결 성공'))
  .catch(err => console.error(err));
passportConfig();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: 'http://portfolio-community.com',
      credentials: true,
    })
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}
// uploads폴더를 기본경로로 잡아줌
app.use('/', express.static(path.join(__dirname, 'uploads')));
// json형식을 처리해서 req.body에 넣어줌(axios)
app.use(express.json());
// form(urlencoded)을 처리해서 req.body에 넣어줌(form)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === 'production' && '.portfolio-community.com',
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/community', communityRouter);
app.use('/communities', communitiesRouter);
app.use('/search', searchRouter);

app.listen(80, () => {
  console.log('서버 실행 중');
});
