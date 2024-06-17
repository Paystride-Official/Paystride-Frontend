import { SERVER_URL } from "@/Utils/constants";
import { getItemFromStorage } from "@/Utils/localStorage";
import handleAxiosError from "@/Utils/request";
import { NewUser } from "@/types/types";
import axios from "axios";
import { redirect } from "next/navigation";

const authToken = getItemFromStorage("AuthToken");
function getAllTransactionApi(data: NewUser) {
  const url = `${SERVER_URL}/transactions?start_date=11-06-2023&end_date=11-11-2024&transaction_type=card`;
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

export const getAllTransaction = async (paypointdata: NewUser) => {
  try {
    const response: any = await getAllTransactionApi(paypointdata);
    const { data } = response;

    if (data) {
      return { success: { ...data } };
    }
  } catch (error) {
    const response = handleAxiosError(error);
    if (response.message === "Unauthorized") {
      redirect("/login");
    }

    return { error: { response } };
  }
};
