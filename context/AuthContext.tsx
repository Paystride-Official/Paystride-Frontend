import { useSignInAccount } from "@/app/(marketing)/(auth)/login/_slice/query";
import { NewUser } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

export const INITIAL_USER = {
  id: "",
  name: "",
  business_name: "",
  email: "",
  phone_number: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
};

type IContextType = {
  user: NewUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<NewUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<NewUser>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);
