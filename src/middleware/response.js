import log from '../components/utils/log';

export default fn => (req, res) => fn(req, res).then(data => {
  res.status(200).send({
    error: false,
    result: data
  });
}).catch((ex) => {
  log.error(`Error in wrapResponse: ${ex}`);
  res.status(409).send({
    message: ex.message,
    error: true
  });
});