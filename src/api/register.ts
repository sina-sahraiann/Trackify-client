import axios from "axios";
import { log } from "console";

const register = () => {
  const config = {
    headers :{
        "Content-Type": "application/json",
    }
    
  };

  axios
    .post(
      "https://8cc0-5-213-138-142.eu.ngrok.io/account/register",
      {
        fristName: "sina",
        lastName: "sahraeian",
        googleAuthCode: "sfg8esgf",
        gender: 0,
        birthDate: "2023-03-11t08:30:39.322z",
        password: "aka2bruh",
        ponfirmPassword: "aka2bruh",
        email: "sinasahraian780@gmail.com",
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default register;
