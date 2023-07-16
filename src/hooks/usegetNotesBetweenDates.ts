import { useState } from "react";
import createNewNoteApiModel from "../models/apiModel/createNewNoteApiModel";
import axiosInstance from "../api/apiInstance";
import getAllNotesApiModel from "../models/apiModel/getAllNotesApiModel";
import getNotesBetweenDatesApiModel from "../models/apiModel/getNotesBetweenDates";

const useGetNotesBetweenDates = (): [
  (data: getNotesBetweenDatesApiModel) => void,
  getAllNotesApiModel[] | null,
  boolean,
  null | string,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [data, setData] = useState(null);

  const getNotesBetween = (data: getNotesBetweenDatesApiModel) => {
    setLoading(true);
    setError(null);

    const queryParams = Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

    axiosInstance
      .get(`/api/Note/getallnotesbetweendates?${queryParams}`)
      .then((response) => {
        if (response.status === 200) {
          console.log('success');
          setLoading(false)
          setError(null);
          setSuccess(true);
          setData(response.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError("An error occurred during creating the note");
      });
  };

  return [getNotesBetween, data, loading, error, success];
};

export default useGetNotesBetweenDates;
