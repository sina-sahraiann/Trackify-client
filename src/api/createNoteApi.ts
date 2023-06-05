import axios from "axios";

const token = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL : 'http://62.106.95.121',
  headers: {
    Authorization : `Bearer ${token}`
  }
})

const creatNoteApi = (
  title: string,
  text: string,
  health: number,
  satisfaction: number,
  happiness: number
): void => {
  authAxios
    .post(
      "http://62.106.95.121/api/Note/createnote",
      {
        title: title,
        text: title,
        health: health,
        satisfaction: satisfaction,
        happiness: happiness,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default creatNoteApi;
