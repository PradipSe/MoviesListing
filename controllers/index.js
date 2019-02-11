const { doConnectApi } = require("./auth/doConnectApi");
const { endpointErrorMsg } = require("../global.config");

module.exports = {
  /**
   * @function MoviesCallApi
   * @description Wrapper to call MoviesCallApi from auth.
   *
   */
  MoviesCallApi: async ctx => {
    const response = await doConnectApi();
    if (JSON.parse(response).data === null) {
      ctx.body = endpointErrorMsg;
    } else {
      ctx.body = response;
    }
  }
};
