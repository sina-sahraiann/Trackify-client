import axios from "axios";

const register = () => {
//   const config = {
//     headers :{
//         "Content-Type": "application/json",
//     }
    
//   };

  axios
    .post(
      "https://8cc0-5-213-138-142.eu.ngrok.io/account/login",
      {
        password: "aka2bruh",
        email: "sinasahraian780@gmail.com",
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default register;
