import { NewUser } from "@/types/types";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "react-query";
import { createUserAccount, resendOtp, verifyOtp } from "./api";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: NewUser) => createUserAccount(user),
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (data: { otp: string; email: string }) => verifyOtp(data),
  });
};

export const useResendOtp = () => {
  return useMutation({
    mutationFn: (data: { email: string }) => resendOtp(data),
  });
};
