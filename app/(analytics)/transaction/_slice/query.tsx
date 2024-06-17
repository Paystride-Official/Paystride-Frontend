import { NewUser } from "@/types/types";
import { useMutation, useQuery } from "react-query";
import { getAllTransaction } from "./api";

// export const useCreatePaymentPoint = () => {
//   return useMutation({
//     mutationFn: (paypointData: NewUser) => createPaypoint(paypointData),
//   });
// };

// export const useEditPaymentPoint = () => {
//   return useMutation({
//     mutationFn: (paypointData: NewUser) => editPaypoint(paypointData),
//   });
// };

// export const useDeltePaymentPoint = () => {
//   return useMutation({
//     mutationFn: (paypointData: NewUser) => deletePaypoint(paypointData),
//   });
// };

// export const useGetPaypoint = () => {
//   return useQuery({
//     queryKey: ["getPaypoint"],
//     queryFn: getPaypoint,
//   });
// };

export const useGetAllTransaction = () => {
  return useQuery({
    queryKey: ["getAllTransaction"],
    queryFn: getAllTransaction,
  });
};
