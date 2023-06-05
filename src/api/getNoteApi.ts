import axios from "axios";

const getNoteApi = (id: string) => {
  axios
    .post("https://8cc0-5-213-138-142.eu.ngrok.io/account/login", {
      id: id,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default getNoteApi