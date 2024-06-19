import { NewUser } from "@/types/types";
import { useMutation, useQuery } from "react-query";
import {
  createVirtualAccount,
  getAllLiteTransaction,
  getAllVirtualAccount,
} from "./api";

export const useCreateVirtualAccout = () => {
  return useMutation({
    mutationFn: (data: NewUser) => createVirtualAccount(data),
  });
};

export const useGetAllVirtualAccount = () => {
  return useQuery({
    queryKey: ["getAllVirtualAccount"],
    queryFn: getAllVirtualAccount,
  });
};

export const useGetAllLiteTransaction = (token: string) => {
  return useQuery({
    queryKey: ["getAllTransaction"],
    queryFn: () => getAllLiteTransaction(token),
  });
};
