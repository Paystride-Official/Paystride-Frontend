import { SERVER_URL } from "@/Utils/constants";
import { NewUser } from "@/types/types";
import handleAxiosError from "@/Utils/request";
import { getItemFromStorage } from "@/Utils/localStorage";
import axiosInstance from "@/AxiosInterceptors";

const authToken = getItemFromStorage("AuthToken");
function submitRequestApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/support/submit-request`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axiosInstance(url, options);
}

function getAllPastIssuesApi() {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/support/past-issues`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

function createSettlementApi(data: NewUser) {
  const url = `${SERVER_URL}/settlements`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

function getSettlemenAccountApi(data: NewUser) {
  const url = `${SERVER_URL}/settlements/${data.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

function getAllSettlementAccountApi() {
  const url = `${SERVER_URL}/paymentpoint`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

export const createSettlement = async (data: NewUser) => {
  try {
    const response: any = await createSettlementApi(data);
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const submitRequest = async (data: NewUser) => {
  try {
    const response: any = await submitRequestApi(data);
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getAllPastIssues = async () => {
  try {
    const response: any = await getAllPastIssuesApi();
    return response;
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getSettlementAccount = async (data: NewUser) => {
  try {
    const response = await getSettlemenAccountApi(data);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getAllSettlementAccount = async () => {
  try {
    const response: any = await getAllSettlementAccountApi();

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
