import { createContext, useContext, useState } from "react";
import { getItemFromStorage } from "@/Utils/localStorage";
import { NewUser } from "@/types/types";
import { getUser } from "@/ProtectedRoute/ProtectedRoute";

const INITIAL_STATE = {
  user: getUser(),
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsLoading: () => {},
};

type IContextType = {
  user: NewUser;
  setUser: React.Dispatch<React.SetStateAction<NewUser>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<NewUser>(getUser());
  const [isLoading, setIsLoading] = useState(false);

  console.log(user, "user");

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);
