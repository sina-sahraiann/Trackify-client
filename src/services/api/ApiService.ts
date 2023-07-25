import axiosInstance from "../../api/apiInstance";
import Dict from "../../models/Dict";

export default class ApiService {
  static async send({
    url,
    method,
    data,
  }: {
    url: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    data: Dict;
  }) {
    

    try {
      let response = await axiosInstance.request({ url, method, data });
      

      if (response.status === 200) {

        console.log(response);
        return response
      }
    } catch (err) {

      Promise.reject(err);

    }
  }
}
