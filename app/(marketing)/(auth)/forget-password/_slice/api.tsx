import { SERVER_URL } from "@/Utils/constants";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

function forgotPasswordApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/forgot-password`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const forgotPassword = async (data: NewUser) => {
  try {
    const response: any = await forgotPasswordApi(data);
    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
