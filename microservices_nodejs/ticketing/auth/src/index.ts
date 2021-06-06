import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.set('trust proxy', true); // allow proxy request - (For HTTPS connection, NOT SURE)
app.use(json());
app.use(
  cookieSession({
    signed: false, // This tells contents in cookies is not encrypted
    secure: true, // This tells cookies only used on https connection - ie u must be on htts connection
  })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// error in Sync
// app.all('*', () => {
//   throw new NotFoundError();
// });

// error in Async  - Option 1
// app.all('*', async (req, res, next) => {
//   next(new NotFoundError());
// });

// error in Async - Option 2
app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT must be declared');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to mongo DB');
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port  3000!!!!!!');
  });
};

start();
