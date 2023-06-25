import { useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import noteModel from "../models/note";

const useGetNote = (
  noteId: string | undefined
): [null | noteModel, boolean, string | null, boolean] => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);

  interface dataToSendModel {
    id: string | undefined;
  }

  const dataToSend: dataToSendModel = {
    id: noteId,
  };

  const queryParams = Object.entries(dataToSend)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  useEffect(() => {
    axiosInstance
      .get(`/api/Note/getnote?${queryParams}`)
      .then((response) => {
        setIsLoading(true);
        if (response.status === 200) {
          console.log("success");
          setData(response.data);
          setIsLoading(false);
          setError(null);
          setSuccess(true);
        }
      })
      .catch((err) => {
        setError("couldnt get note");
        console.log(err);
      });
    setIsLoading(false);
  }, []);

  return [data, isLoading, error, success];
};

export default useGetNote;
