import { NewUser } from "@/types/types";
import { useMutation, useQuery } from "react-query";
import { createStaff, deleteStaff, editStaff, getAllStaff } from "./api";

export const useCreateStaff = () => {
  return useMutation({
    mutationFn: (createData: NewUser) => createStaff(createData),
  });
};
export const useEditStaff = () => {
  return useMutation({
    mutationFn: (editData: NewUser) => editStaff(editData),
  });
};
export const useDeleteStaff = () => {
  return useMutation({
    mutationFn: (deleteData: NewUser) => deleteStaff(deleteData),
  });
};

export const useGetAllStaff = (data: { merchant_id: number }) => {
  return useQuery({
    queryKey: ["getAllStaff", data.merchant_id],
    queryFn: () => getAllStaff(data),

    onSuccess: (fetchedData) => {
      // You can perform additional logic here if needed
    },

    enabled: true,
  });
};
