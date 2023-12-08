import { SERVER_URL } from "@/Utils/constants";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";

function registerApi(data: NewUser) {
  const url = `${SERVER_URL}/merchants/`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(url, options);
}
function verifyOtpApi(data: { otp: string; email: string }) {
  const url = `${SERVER_URL}/verifyemail`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(url, options);
}
function resendOtpApi(data: { email: string }) {
  const url = `${SERVER_URL}/merchants/resend-otp`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(url, options);
}

export const createUserAccount = async (user: NewUser) => {
  try {
    const response: any = await registerApi(user);
    const { data, status, statusText } = response;
    const successResponse = { success: { ...data, status, statusText } };

    if (data) {
      return successResponse;
    }
  } catch (error) {
    const errorResponse = { error: handleAxiosError(error) };
    return errorResponse;
  }
  // return user;
};

export const verifyOtp = async (otpdeatails: {
  otp: string;
  email: string;
}) => {
  try {
    const response = await verifyOtpApi(otpdeatails);
    const { data }: any = response;
    if (data) {
      const successResponse = { success: { data } };
      return successResponse;
    }
  } catch (error) {
    const errorResponse = { error: handleAxiosError(error) };

    return errorResponse;
  }
};

export const resendOtp = async (resendOptdata: { email: string }) => {
  try {
    const response = await resendOtpApi(resendOptdata);
    const successResponse = { success: { response } };
    return successResponse;
  } catch (error) {
    const errorResponse = { error: handleAxiosError(error) };
    return errorResponse;
  }
};

//axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content;
// otp response
//{
//     "message": "Email verified successfully",
//     "data": {
//         "id": 6,
//         "name": "John Doe",
//         "business_name": "Doe Enterprises",
//         "email": "emmycruz695@gmail.com",
//         "phone_number": "+2348133676413",
//         "t_and_c": true,
//         "referred_by": null,
//         "created_at": "2023-11-12T11:12:00.000000Z",
//         "updated_at": "2023-11-12T11:13:56.000000Z"
//     },
//     "token": "1|v1XCqiOqkkxXMch0uArWM4FV3DT2mlhsUHW0BnLXfdd53b26"
// }
