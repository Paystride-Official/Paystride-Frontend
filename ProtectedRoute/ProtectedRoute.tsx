// components/ProtectedRoute.tsx

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getItemFromStorage } from "@/Utils/localStorage";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const authToken = getItemFromStorage("AuthToken");

    if (!authToken) {
      // If not authenticated, redirect to the login page
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
