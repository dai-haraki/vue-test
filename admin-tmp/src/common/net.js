import axios from 'axios'
import request from './request'

/**
 * 通信モジュール
 * httpクライアントとしてaxiosを利用する
 * @see: https://github.com/axios/axios
 */
export default class Net {
  /**
   * getで通信する
   * @param {request} req 
   */
  static async get(req) {
    const res = await axios.get(req.uri);
    console.log(res);
    return res;
  }
  
  /**
   * postで通信する
   * @param {request} req
   */
  static async post(req) {
    const res = await axios.post(req.uri, req.data);
    console.log(res);
    return res;
  }
}
