import axios from "axios";
import { useState, useEffect } from "react";
import getAllNotesApiModel from "../models/apiModel/getAllNotesApiModel";
import axiosInstance from "../api/apiInstance";
import NoteApi from "../services/api/NoteApi";

const useGetAllNotes = (): [
  getAllNotesApiModel[] | null,
  React.Dispatch<React.SetStateAction<getAllNotesApiModel[] | null>>,
  boolean,
  string | null,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [data, setData] = useState<getAllNotesApiModel[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [retry, setRetry] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await NoteApi.getAll({ pageNumber: 1, pageSize: 130 });
        setData(response?.data)
        setIsLoading(false)
        console.log(response);
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, [retry]);

  return [data, setData, isLoading, error, success, setRetry];
};

export default useGetAllNotes;
