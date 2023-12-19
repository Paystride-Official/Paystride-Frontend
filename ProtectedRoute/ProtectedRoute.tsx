// components/ProtectedRoute.tsx

// "use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { getItemFromStorage } from "@/Utils/localStorage";
import { authToken } from "./Auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const router = useRouter();

  // useEffect(() => {
  // Check if the user is authenticated
  // const authToken = getItemFromStorage("AuthToken");
  // console.log(authToken);

  if (!authToken) {
    console.log("not true");

    // If not authenticated, redirect to the login page
    redirect("/login");
  }
  // }, []);

  return <>{children}</>;
};
