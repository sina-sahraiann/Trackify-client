
import { useContext, useState } from "react";
import axiosInstance from "../api/apiInstance";
import {
  useSnackbar,
  snackbarContextType,
} from "../providers/globalSnackBarProvider";
import NoteApi from "../services/api/NoteApi";

const useDeleteNote = (): [
  (noteId: string) => Promise<void>,
  boolean,
  null | string,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { addSnackbar } = useSnackbar()

  const deleteNote = async (noteId: string) => {
    
    try {
      setLoading(true);
      await NoteApi.delete({id: noteId});
      setLoading(false);
      
    } catch (error) {
      console.log(error);
    }
  };

  return [deleteNote, loading, error, success];
};

export default useDeleteNote;
