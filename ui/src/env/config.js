const environment = process.env.NODE_ENV;
const config = require(`./${environment}.json`);
const lodashGet = require('lodash/get');

function get(field) {
  const value = lodashGet(config, field) || lodashGet(process.env, field);

  return value;
}

export default { get };
