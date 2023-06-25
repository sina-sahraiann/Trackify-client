import { useState } from "react";
import loginApiModel from "../models/apiModel/loginApiModel";
import axios from "axios";
import { useNavigate } from "react-router";
import createNewNoteApiModel from "../models/apiModel/createNewNoteApiModel";
import axiosInstance from "../api/apiInstance";

const useCreateNewNote = (): [
  (data: createNewNoteApiModel) => void,
  boolean,
  null | string,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const createNote = (data: createNewNoteApiModel) => {
    setLoading(true);
    setError(null);

    axiosInstance
      .post("/api/Note/createnote", data)
      .then((response) => {
        if (response.status === 200) {
          setError(null);
          setSuccess(true);
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred during creating the note");
      });

      setLoading(false)
  };

  return [createNote, loading, error, success];
};

export default useCreateNewNote;
