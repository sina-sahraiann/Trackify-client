import axios from "axios";

const loginApi = () => {
  
  axios
    .post(
      "http://62.106.95.121/api/account/login",
      {
        password: "aliali123",
        email: "sinasahraian780@gmail.com",
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default loginApi;
