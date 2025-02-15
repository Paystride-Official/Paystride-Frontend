"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import {
  getItemFromStorage,
  removeItemFromStorage,
} from "@/Utils/localStorage";
import Loader from "@/components/Loader/Loader";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Check if the user is authenticated
    setLoading(true);
    const authToken = getItemFromStorage("AuthToken");
    const user_info = getItemFromStorage("user-info");

    setLoading(false);

    if (!authToken && !user_info) {
      removeItemFromStorage("user-info");
      // If not authenticated, redirect to the login page
      redirect("/login");
    }
  }, []);

  return <>{loading ? <Loader /> : children}</>;
};

export const getUser = () => {
  const user = getItemFromStorage("user-info");
  return user;
};
