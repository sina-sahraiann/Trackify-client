import axios from "axios";

const refreshTokenApi = (refreshToken: string): void => {
  axios
    .post("http://62.106.95.121/api/Account/RefreshToken", {
      RefreshToken: refreshToken,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default refreshTokenApi
