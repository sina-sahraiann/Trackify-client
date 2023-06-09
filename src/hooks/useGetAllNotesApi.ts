import axios from "axios";
import { useState, useEffect } from "react";
import getAllNotesApiModel from "../models/apiModel/getAllNotesApiModel";
import axiosInstance from "../api/apiInstance";

const useGetAllNotes = (): [
  getAllNotesApiModel[] | null,
  boolean,
  string | null,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [retry , setRetry] = useState<boolean>(false);

  const token = localStorage.getItem("token");

  interface dataToSendModel {
    pageSize: number;
    pageNumber: number;
  }

  const dataToSend: dataToSendModel = {
    pageSize: 130,
    pageNumber: 1,
  };
  
  const queryParams = Object.entries(dataToSend)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  useEffect(() => {
    setIsLoading(true)
    axiosInstance
      .get(`/api/Note/getallnotes?${queryParams}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("success");
          setData(response.data);
          setIsLoading(false);
          setError(null);
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [retry]);

  return [data, isLoading, error, success,setRetry];
};

export default useGetAllNotes;
