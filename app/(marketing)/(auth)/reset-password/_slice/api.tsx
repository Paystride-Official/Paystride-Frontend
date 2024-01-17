import { SERVER_URL } from "@/Utils/constants";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

function resetPasswordApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchant/reset-password`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const resetPassword = async (data: NewUser) => {
  console.log(data);

  try {
    const response: any = await resetPasswordApi(data);
    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
