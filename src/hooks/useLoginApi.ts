import { useState } from "react";
import loginApiModel from "../models/apiModel/loginApiModel";
import axios from "axios";
import { useNavigate } from "react-router";

const useLoginApi = ():[
  (data: loginApiModel) => void,
  boolean,
  null | string,
  boolean
] => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = (data: loginApiModel) => {
    setLoading(true);
    setError(null)

    axios
      .post("http://62.106.95.121/api/account/login",data)
      .then((response) => {
        if (response.status === 200) {
          setError(null);
          setSuccess(true);
          console.log(response.data);
          
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("refreshTokenIsValid", 'true');
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred during login')
        setLoading(false)
      });
  };

  return [login, loading, error, success];
};

export default useLoginApi;

