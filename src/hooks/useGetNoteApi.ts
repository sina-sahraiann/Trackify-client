import { useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import noteModel from   '../models/note'

const useGetNote = (noteId: string):[
    null| noteModel,
    boolean,
    string|null,
    boolean
] => {


  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null|string>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axiosInstance.get("api/account/login", {
          params: {
            id: noteId,
          },
        });
        if (response.status === 200) {
          console.log("success");
          setData(response.data);
          setIsLoading(false);
          setError(null);
          setSuccess(true);
        }
      } catch (error) {
        setError("couldnt get note")
        throw new Error("coudnt get note");
      }
    };

    setIsLoading(false);
    setSuccess(false);
  }, []);

  return [data, isLoading, error, success];
};
