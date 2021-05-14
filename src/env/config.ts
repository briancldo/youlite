const environment = process.env.NODE_ENV;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(`./${environment}.json`);
import lodashGet from "lodash/get";

function get(field: string) {
  return lodashGet(config, field) || lodashGet(process.env, field);
}

const exports = { get };
export default exports;
