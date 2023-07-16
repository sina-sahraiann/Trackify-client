import { useEffect, useState } from "react";
import axiosInstance from "../api/apiInstance";
import noteModel from "../models/note";
import getUserProfileApiModel from "../models/apiModel/getUserProfileApiModel";

const useGetUser = (): [
  null | getUserProfileApiModel,
  boolean,
  string | null,
  boolean
] => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    axiosInstance
      .get(`/api/userprofile/getuserprofile`)
      .then((response) => {
        setIsLoading(true);
        if (response.status === 200) {
          setData(response.data);
          console.log(data);
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

  console.log(data);
  

  return [data, isLoading, error, success];
};

export default useGetUser;
