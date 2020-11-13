import dotenv from 'dotenv';
// import path from 'path';
// import { createDoc } from 'apidoc';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import log from './components/utils/log';

// const doc = createDoc({
//   src: path.resolve(__dirname, 'app'),
//   dest: path.resolve(__dirname, '../doc')
// });

// if (typeof doc !== 'boolean') console.log('Documentation was generated!');

dotenv.config();
require('./models');
const app = express();
app.use(express.static('doc'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.options('*', cors());
app.use(cors());

routes.map(route => app.use(route.path, route.handler));

// app.use('/api-doc', (req, res) => res.sendFile(`${__dirname}/doc/index.html`));

app.use('*', (req, res) => res.status(409).json({ message: 'Forbidden' }));

const port = process.env.PORT || 3000;

app.listen(port, () => log.info(`Server is running 🚀 on ${port} port, Process Pid: ${process.pid}`));
