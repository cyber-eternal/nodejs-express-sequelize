export const checkMissingFields = (data, fields) => {
  for (const field of fields) {
    if (!data[field]) throw new Error(`Invalid request data <${field}>`);
  }
};

export const validateEmail = email => {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // eslint-disable-line
  return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = phone => {
  const re = /^((\+)?)([(\)]*\d{1}){8,13}$/; // eslint-disable-line
  return re.test(phone);
};

export const validateQueryParams = query => {
  try {
    if (Object.keys(query).length === 0) return {};
    return JSON.parse(query);
  } catch (ex) {
    throw new Error('Invalid Request Data');
  }
};