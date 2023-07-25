import { useEffect, useState } from "react";
import axios from "axios";
import signupApiModel from "../models/apiModel/signupApiModel";
import { useNavigate } from "react-router";

const useSignupApi = (): [
  (userData: signupApiModel) => Promise<void>,
  boolean,
  string | null,
  boolean
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const signUp = async (userData: signupApiModel) => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      axios
        .post("http://62.106.95.121/api/account/register", userData)
        .then((response) => {          
          if (response.status === 200) {
            setSuccess(true);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            localStorage.setItem("refreshTokenIsValid", "true");
            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        })
        .catch((error : any) => {          
          setError("An error occurred during sign up");
        });

      setLoading(false);
      setSuccess(false);
    }, 1000);
  };

  return [signUp, loading, error, success];
};

export default useSignupApi;
