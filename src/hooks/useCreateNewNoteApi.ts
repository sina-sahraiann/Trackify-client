import { useState, useContext } from "react";
import loginApiModel from "../models/apiModel/loginApiModel";
import axios from "axios";
import { useNavigate } from "react-router";
import createNewNoteApiModel from "../models/apiModel/createNewNoteApiModel";
import axiosInstance from "../api/apiInstance";
import {
  snackbarContextType,
  useSnackbar,
} from "../providers/globalSnackBarProvider";

const useCreateNewNote = (): [
  (data: createNewNoteApiModel) => void,
  boolean,
  null | string,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { addSnackbar } = useSnackbar();

  const createNote = (data: createNewNoteApiModel) => {
    console.log(useSnackbar);

    setLoading(true);
    setError(null);

    axiosInstance
      .post("/api/Note/createnote", data)
      .then((response) => {
        if (response.status === 200) {
          setError(null);
          setSuccess(true);
          setLoading(false);
          addSnackbar("created note successfully!", "success");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("An error occurred during creating the note");
        addSnackbar("An error occurred during creating the note", "error");
      });
  };

  return [createNote, loading, error, success];
};

export default useCreateNewNote;
