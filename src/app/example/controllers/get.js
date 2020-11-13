import Examples from '../../../models/example';

export default async req => {
  const { id } = req.params;
  if (id) return Examples.findByPk(id);
  return Examples.findAll();
};