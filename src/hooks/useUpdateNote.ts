import { useState } from "react";
import axiosInstance from "../api/apiInstance";
import updateNoteApiModel from "../models/apiModel/updateNoteApiMdel";

const useUpdateNote = (): [
  (data: updateNoteApiModel) => Promise<void>,
  boolean,
  string | null,
  boolean
] => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateNote = async (data: updateNoteApiModel) => {
    setIsLoading(true);
    const response = await axiosInstance.post("/api/Note/updatenote", data);
    try {
      if (response.status === 200) {
        setSuccess(true);
        setError(null);
      }
    } catch (error: any) {
      setError("An error occurred during updating note");
      console.log(error);
    }
    setIsLoading(false);
  };

  return [updateNote, success, error, isLoading];
};

export default useUpdateNote;
