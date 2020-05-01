// import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index';

dotenv.config();
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options('*', cors());
app.use(cors());

app.use('/', indexRouter);

app.use('*', (req, res) => {
  res.status(409).json({ message: 'Forbidden' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
