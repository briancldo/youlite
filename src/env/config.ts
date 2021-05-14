const environment = process.env.NODE_ENV;
const config = require(`./${environment}.json`);
const lodashGet = require("lodash/get");

function get(field: string) {
  return lodashGet(config, field) || lodashGet(process.env, field);
}

const exports = { get };
export default exports;
