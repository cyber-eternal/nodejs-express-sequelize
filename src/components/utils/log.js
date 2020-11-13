import bunyan from 'bunyan';

const log = bunyan.createLogger({ name: 'node-api' });

export default log;