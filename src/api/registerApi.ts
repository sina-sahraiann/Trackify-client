import axios from "axios";
import { log } from "console";

const registerApi = () => {

  axios.post(
      "http://62.106.95.121/api/account/register",
      {
        fristName: "sina",
        lastName: "sahraeian",  
        googleAuthCode: "sfg8esgf",
        gender: 0,
        birthDate: "2023-03-11T08:30:39.322",
        password: "aka2bruh",
        confirmPassword: "aka2bruh",
        email: "sinasahraian780@gmail.com",
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default registerApi;
