import axios from "axios";

const forgotPasswordApi = (email: string): void => {
  axios
    .post("https://8cc0-5-213-138-142.eu.ngrok.io/api/Account/ForgetPassword", {
      email: email,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default forgotPasswordApi;
