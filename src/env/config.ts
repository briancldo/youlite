const environment = process.env.NODE_ENV;
const config = require(`./${environment}.json`);
const lodashGet = require('lodash/get');

function get(field: string) {
  const value = lodashGet(config, field) || lodashGet(process.env, field);

  return value;
}

const exports = { get };
export default exports;
