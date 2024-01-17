import { NewUser } from "@/types/types";
import { useMutation } from "react-query";
import { resetPassword } from "./api";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (user: NewUser) => resetPassword(user),
  });
};
