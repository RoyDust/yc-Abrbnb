import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class YCRequest {
  constructor(baseURL, timeout) {
    // 初始化目标地址和过期时间
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 响应拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }


  request(config) {
    // 将需要自定义的config传入
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }
}


export default new YCRequest(BASE_URL, TIMEOUT)