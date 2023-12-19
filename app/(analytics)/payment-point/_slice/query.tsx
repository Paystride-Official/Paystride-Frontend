import { NewUser } from "@/types/types";
import { useMutation, useQuery } from "react-query";
import {
  createPaypoint,
  editPaypoint,
  getAllPaypoint,
  getPaypoint,
} from "./api";

export const useCreatePaymentPoint = () => {
  return useMutation({
    mutationFn: (paypointData: NewUser) => createPaypoint(paypointData),
  });
};
export const useEditPaymentPoint = () => {
  return useMutation({
    mutationFn: (paypointData: NewUser) => editPaypoint(paypointData),
  });
};

export const useGetPaypoint = () => {
  return useQuery({
    queryKey: ["getPaypoint"],
    queryFn: getPaypoint,
  });
};

export const useGetAllPaypoint = () => {
  return useQuery({
    queryKey: ["getAllPaypoint"],
    queryFn: getAllPaypoint,
  });
};