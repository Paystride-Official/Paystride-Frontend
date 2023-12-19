import { useMutation } from "react-query";
import { forgotPassword } from "./api";
import { FieldValues } from "react-hook-form";
import { NewUser } from "@/types/types";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: NewUser) => forgotPassword(data),
  });
};
