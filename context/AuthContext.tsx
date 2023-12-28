"use client";
import { createContext, useContext, useState } from "react";
import { getItemFromStorage } from "@/Utils/localStorage";
import { NewUser } from "@/types/types";

export const INITIAL_USER = {
  ...getItemFromStorage("user-info"),
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsLoading: () => {},
};

type IContextType = {
  user: NewUser | null;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<NewUser>>;
  isAuthenticated: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<NewUser | null>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);
