import axiosInstance from "@/AxiosInterceptors";
import { SERVER_URL } from "@/Utils/constants";
import { getItemFromStorage } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";

const authToken = getItemFromStorage("AuthToken");

function createSettlementApi(data: NewUser) {
  const url = `${SERVER_URL}/settlements`;
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

function deleteSettlementApi(data: NewUser) {
  const url = `${SERVER_URL}/settlements`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
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

export const createSettlement = async (paypointdata: NewUser) => {
  try {
    const response: any = await createSettlementApi(paypointdata);
    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { ...response } };
  }
};
export const deleteSettlement = async (paypointdata: NewUser) => {
  try {
    const response: any = await deleteSettlementApi(paypointdata);
    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { ...response } };
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

    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { ...response } };
  }
};
