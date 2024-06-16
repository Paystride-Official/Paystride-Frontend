"use client";
import axiosInstance from "@/AxiosInterceptors";
import { SERVER_URL } from "@/Utils/constants";
import {
  getItemFromStorage,
  removeItemFromStorage,
  storeItem,
} from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";
import { toast } from "react-toastify";

const authToken = getItemFromStorage("AuthToken");

function loginApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/login`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

function signOutApi() {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/logout`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

export const signInAccount = async (userData: NewUser) => {
  try {
    const response: any = await loginApi(userData);

    const {
      data: { token, user },
    } = response;

    // const responseData = { ...data, status, statusText };
    // console.log(responseData);

    if (token && user) {
      // const { token, ...rest } = responseData;

      // Store the token in local storage
      storeItem("AuthToken", token);
      storeItem("user-info", user);

      // Navigate to the dashboard page

      // Return the remaining user data
      return { success: user };
    }
    return null;
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: response };
  }
};

export const signOutAccount = async () => {
  try {
    const response = await signOutApi();

    removeItemFromStorage("AuthToken");
    //romve from local storage

    removeItemFromStorage("user-info");

    toast.success("logged out successfully");

    return { success: response };
  } catch (error) {
    const response = handleAxiosError(error);
    return { error: response };
  }
};
