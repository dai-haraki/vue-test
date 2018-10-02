export default class Request {
  /**
   * リクエスト
   * @param {string} uri 
   * @param {*} data 
   */
  constructor(uri = '', data = {}) {
    this.uri = uri;
    this.data = data;
  }
}
