import { SERVER_URL } from "@/Utils/constants";
import { request } from "@/Utils/request";
import { NewUser } from "@/types/types";

function loginApi(data: NewUser) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/merchants/`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "eMke5Bxhz0FHs6fp7ZVljyVmqqKYvQT8",
    },
    data: JSON.stringify(data),
  };

  return request(url, options);
  //   return axios(url, options);
}
export const signInAccount = async (user: NewUser) => {
  try {
    loginApi(user);
    // const response = await axios(url, options);
  } catch (error) {
    console.log(error);
  }
  return user;
};
