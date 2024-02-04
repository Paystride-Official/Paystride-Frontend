import { SERVER_URL } from "@/Utils/constants";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

function createPaypointApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchants/payment-points`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function editPaypointApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchants/payment-points/${data.id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function deletePaypointApi(data: NewUser) {
  console.log(data, "delte dat");

  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchants/payment-points/${data.id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function getPaypointApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchants/payment-points/${1}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}
function getAllPaypointApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchants/${1}/payment-points`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const createPaypoint = async (paypointdata: NewUser) => {
  try {
    const response: any = await createPaypointApi(paypointdata);
    console.log(response);
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const editPaypoint = async (paypointdata: NewUser) => {
  try {
    const response: any = await editPaypointApi(paypointdata);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const deletePaypoint = async (paypointdata: NewUser) => {
  try {
    const response: any = await deletePaypointApi(paypointdata);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getPaypoint = async (paypointdata: NewUser) => {
  try {
    const response: any = await getPaypointApi(paypointdata);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getAllPaypoint = async (paypointdata: NewUser) => {
  try {
    const response: any = await getAllPaypointApi(paypointdata);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
