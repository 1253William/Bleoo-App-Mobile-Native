import type { loginFormData } from "@/schemas/index.ts";
import { useAuthStore } from "@/store/AuthStore";
import { AxiosError } from "axios";

import axiosInstance from "@/lib/axiosInstance";

type RegisterPayload = {
  fullName: string;
  userName: string;
  studentStatus: string;
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: loginFormData) => {
  const { setAuthData } = useAuthStore.getState();
  try {
    const response = await axiosInstance.post("/api/v1/auth/login", {
      email,
      password,
    });

    const { accessToken, data } = response.data;

    if (accessToken && data) {
      setAuthData({ token: accessToken, user: data }); // make sure your AuthStore matches this
    }

    return response;
  } catch (error) {
    let message = "Login failed. Please try again.";

    if (error && typeof error === "object" && "isAxiosError" in error) {
      const axiosError = error as AxiosError<any>;
      console.log("Axios Error Response:", axiosError.response?.data);
      message = axiosError.response?.data?.message || message;
    }

    throw new Error(message);
  }
};

export const registerUser = async (payload: RegisterPayload) => {
  const { setAuthData } = useAuthStore.getState();

  try {
    const response = await axiosInstance.post("/api/v1/auth/register", payload);

    const { accessToken, data } = response.data;

    if (accessToken && data) {
      setAuthData({ token: accessToken, user: data });
    }

    return response;
  } catch (error) {
    let message = "Registration failed. Please try again.";

    if (error && typeof error === "object" && "isAxiosError" in error) {
      const axiosError = error as AxiosError<any>;
      message = axiosError.response?.data?.message || message;
    }

    throw new Error(message);
  }
};
