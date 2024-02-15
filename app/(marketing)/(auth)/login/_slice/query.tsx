import { NewUser } from "@/types/types";
import { useMutation } from "react-query";
import { signInAccount, signOutAccount } from "./api";

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: NewUser) => signInAccount(user),
  });
};
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount(),
  });
};
