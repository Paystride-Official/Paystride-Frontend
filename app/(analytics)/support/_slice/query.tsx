import { NewUser } from "@/types/types";
import { useMutation, useQuery } from "react-query";
import {
  getAllPastIssues,
  submitRequest,
  createSettlement,
  getSettlementAccount,
  getAllSettlementAccount,
} from "./api";

import {} from "./api";

export const useSubmitRequest = () => {
  return useMutation({
    mutationFn: (submitData: NewUser) => submitRequest(submitData),
  });
};

export const useGetAllPastIssues = () => {
  return useQuery({
    queryKey: ["geAllPastIssues"],
    queryFn: getAllPastIssues,
  });
};

export const useCreateSettlement = () => {
  return useMutation({
    mutationFn: (settlementData: NewUser) => createSettlement(settlementData),
  });
};

export const useGetSettlementAccount = () => {
  return useQuery({
    queryKey: ["getSettlementAccount"],
    queryFn: (data: NewUser) => getSettlementAccount(data),
  });
};

export const useGetAllSettlementAccount = () => {
  return useQuery({
    queryKey: ["getAllSettlementAccount"],
    queryFn: getAllSettlementAccount,
  });
};
