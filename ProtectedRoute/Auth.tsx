"use client";
import { getItemFromStorage } from "@/Utils/localStorage";

export const authToken = getItemFromStorage("AuthToken");
console.log(authToken);
