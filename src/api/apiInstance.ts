import axios, { AxiosError, AxiosResponse } from "axios";
import mem from "mem";

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
    Promise.reject(error);
  }
);

// Axios response interceptor to handle token expiration and refresh token logic
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true;
      // Token is expired or invalid
      try {
        const newToken = await memoizedRefreshToken();

        if (newToken) {
          // Retry the failed request with the new token
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
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

const navigateToAboutPage = () => {
  window.history.pushState(null, "", "/login");

  const popStateEvent = new PopStateEvent("popstate");
  window.dispatchEvent(popStateEvent);
};

// Function to get a new token using the refresh token
const getNewToken = async () => {
  try {
    const refreshtoken = localStorage.getItem("refreshToken");

    const response = await axios.post(
      `http://62.106.95.121/api/Account/RefreshToken`,
      {
        refreshToken: refreshtoken,
      }
    );

    const newToken = response.data.token;

    const newRefreshToken = response.data.refreshToken;
    localStorage.setItem("token", newToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    localStorage.setItem("refreshTokenIsValid", "true");
    return newToken;
  } catch (error: any) {
    navigateToAboutPage();
  }
};

const maxAge = 100000;

const memoizedRefreshToken = mem(getNewToken, {
  maxAge,
});

export default axiosInstance;
