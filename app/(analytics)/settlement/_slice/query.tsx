import { NewUser } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createSettlement,
  getSettlementAccount,
  getAllSettlementAccount,
  deleteSettlement,
} from "./api";

export const useCreateSettlement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (settlementData: NewUser) => createSettlement(settlementData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllSettlementAccount"],
      });
    },
  });
};

export const useDeleteSettlementAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (settlementData: NewUser) => deleteSettlement(settlementData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllSettlementAccount"],
      });
    },
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
