import axios from "axios";

import { SERVER_URL } from "@/Utils/constants";
import { getItemFromStorage } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import { redirect } from "next/navigation";

const authToken = getItemFromStorage("AuthToken");
function createPaypointApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/paymentpoint`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function editPaypointApi(data: NewUser) {
  const url = `${SERVER_URL}/paymentpoint/${data.id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function deletePaypointApi(data: NewUser) {
  const url = `${SERVER_URL}/payment-point/${data.id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function getPaypointApi(data: NewUser) {
  const url = `${SERVER_URL}/paymentpoint/${1}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function getAllPaypointApi(data: NewUser) {
  const url = `${SERVER_URL}/paymentpoint`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
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
    const { data } = response;

    return { success: { ...data } };
  } catch (error) {
    const response = handleAxiosError(error);
    console.log(response.message);
    if (response.message === "Unauthorized") {
      redirect("/login");
    }

    return { error: { response } };
  }
};
