import { SERVER_URL } from "@/Utils/constants";
import { storeItem } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

function loginApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/login`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "eMke5Bxhz0FHs6fp7ZVljyVmqqKYvQT8",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const signInAccount = async (user: NewUser) => {
  try {
    const response: any = await loginApi(user);

    const { data, status, statusText } = response;
    const responseData = { ...data, status, statusText };

    if (data) {
      const { token, ...rest } = responseData;

      // Store the token in local storage
      storeItem("AuthToken", token);

      // Navigate to the dashboard page

      // Return the remaining user data
      return rest;
    }
  } catch (error) {
    const response = handleAxiosError(error);
    return response;
  }
};
