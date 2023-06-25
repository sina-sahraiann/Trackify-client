import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";

// Replace 'your_refresh_token_here' with your actual refresh token
let refreshToken = "your_refresh_token_here";

const axiosInstance = axios.create({
  baseURL: "http://62.106.95.121",
});

// Axios request interceptor to add the Authorization header with the current token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor to handle token expiration and refresh token logic
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401 && !error.config._retry) {
      // Token is expired or invalid
      try {
        const newToken = await getNewToken();
        if (newToken) {
          // Retry the failed request with the new token
          error.config.headers.Authorization = `Bearer ${newToken}`;
          error.config._retry = true;
          return axiosInstance(error.config);
        }
      } catch (refreshError) {
        // Failed to get a new token
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Function to get the current token (replace with your own logic to retrieve the token)
function getToken() {
  return localStorage.getItem("token");
}




// Function to get a new token using the refresh token
const getNewToken = async (): Promise<AxiosResponse> => {
  try {
    const refreshtoken = localStorage.getItem("refreshToken");

    const response = await axios.post(
      `http://62.106.95.121/api/Account/RefreshToken`,
      {
        refreshToken: refreshtoken,
      }
    );

    const newToken = response.data.token;

    refreshToken = response.data.refreshToken;
    localStorage.setItem("token", newToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("refreshTokenIsValid", 'true');
    return newToken;
  } catch (error: any) {
    if (error.response.status === 401) {
      localStorage.setItem("refreshTokenIsValid", 'false');
    }
    throw new Error("Failed to get a new token");
  }
};

export default axiosInstance;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

