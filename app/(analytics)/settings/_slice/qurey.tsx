import { NewUser } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createStaff,
  deleteStaff,
  editStaff,
  getAllStaff,
  getBusinessInfo,
  updateBusinessInfo,
  updatePassword,
} from "./api";

export const useCreateStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (createData: NewUser) => createStaff(createData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllStaff"],
      });
    },
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

export const useGetBusinessInfo = () => {
  return useQuery({
    queryKey: ["getBusinessInfo"],
    queryFn: () => getBusinessInfo(),

    enabled: true,
  });
};

export const useUpdataBusinessInfo = () => {
  return useMutation({
    mutationFn: (data: NewUser) => updateBusinessInfo(data),
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: (data: NewUser) => updatePassword(data),
  });
};
