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
function getAllStaffApi() {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/staff`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

export const createStaff = async (paypointdata: NewUser) => {
  try {
    const response: any = await createStaffApi(paypointdata);
    const { data } = response;

    return { success: { ...data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { ...response } };
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

export const getAllStaff = async (data: NewUser) => {
  try {
    const response: any = await getAllStaffApi();
    console.log(response);

    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

/************************* SETTING PAGE API******************************** */
function getBusinessInfoApi() {
  const url = `${SERVER_URL}/settings/business-information`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

function updateBusinessInfoApi(data: NewUser) {
  const url = `${SERVER_URL}/settings/business-information`;
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

function updatePasswordApi(data: NewUser) {
  const url = `${SERVER_URL}/settings/change-password`;
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

export const getBusinessInfo = async () => {
  try {
    const response: any = await getBusinessInfoApi();

    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response.error };
  }
};

export const updateBusinessInfo = async (data: NewUser) => {
  try {
    const response: any = await updateBusinessInfoApi(data);

    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response };
  }
};

export const updatePassword = async (data: NewUser) => {
  try {
    const response: any = await updatePasswordApi(data);

    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response };
  }
};

/************************** SETTING PAGE API******************************* */
