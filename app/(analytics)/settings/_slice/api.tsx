import { SERVER_URL } from "@/Utils/constants";
import { getItemFromStorage } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

const authToken = getItemFromStorage("AuthToken");
function createStaffApi(data: NewUser) {
  const url = `${SERVER_URL}/staff`;
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

function editStaffApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/staff/${data.id}`;
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

function deleteStaffApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/staff/${data.id}`;
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
function getAllStaffApi(data: NewUser) {
  console.log(data);

  //user: { email: string; password: string }
  const url = `${SERVER_URL}/staff`;
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

export const createStaff = async (paypointdata: NewUser) => {
  try {
    const response: any = await createStaffApi(paypointdata);
    const { data } = response;

    console.log(response.data);
    return { success: { ...data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const editStaff = async (paypointdata: NewUser) => {
  try {
    const response: any = await editStaffApi(paypointdata);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const deleteStaff = async (paypointdata: NewUser) => {
  try {
    const response: any = await deleteStaffApi(paypointdata);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getAllStaff = async (paypointdata: NewUser) => {
  try {
    const response: any = await getAllStaffApi(paypointdata);

    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
