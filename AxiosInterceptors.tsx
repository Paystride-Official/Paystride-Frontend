import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, return it without any changes
    return response;
  },
  (error) => {
    console.log(error.response.status);

    // If the error status is 401 (Unauthorized), redirect to the login page
    if (error.response && error.response.status === 401) {
      const router = useRouter();

      router.push("/login");
      // Assuming '/login' is your login page route
    }
    // For other errors, simply return the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
