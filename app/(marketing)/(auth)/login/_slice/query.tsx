import { NewUser } from "@/types/types";
import { useMutation } from "react-query";
import { signInAccount } from "./api";

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: NewUser) => signInAccount(user),
  });
};
