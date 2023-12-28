// components/ProtectedRoute.tsx

"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getItemFromStorage } from "@/Utils/localStorage";
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

    setLoading(false);

    if (!authToken) {
      console.log("not true");

      // If not authenticated, redirect to the login page
      redirect("/login");
    }
  }, []);

  return <>{loading ? <Loader /> : children}</>;
};
