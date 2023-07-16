import { useState } from "react";
import axiosInstance from "../api/apiInstance";

const useDeleteNote = (): [
  (noteId: string) => Promise<void>,
  boolean,
  null | string,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteNote = async (noteId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/api/Note/deletenote", {
        id: noteId,
      });
      if (response.status === 200) {
        setError(null);
        setSuccess(true);
        console.log(response);
      }
      setLoading(false);
    } catch (error) {
      setError("An error occurred during deleting the note");
      setLoading(false)
      throw new Error("An error occurred during deleting the note");
    }
  };

  return [deleteNote, loading, error, success];
};

export default useDeleteNote;
