import { SERVER_URL } from "@/Utils/constants";
import { getItemFromStorage } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

const authToken = getItemFromStorage("AuthToken");
function createVirtualAccountApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/try-lite`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function getAllVirtualAccountApi() {
  const url = `${SERVER_URL}/virtual-account`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    // data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const createVirtualAccount = async (data: NewUser) => {
  try {
    const response: any = await createVirtualAccountApi(data);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getAllVirtualAccount = async () => {
  try {
    const response: any = await getAllVirtualAccountApi();

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
