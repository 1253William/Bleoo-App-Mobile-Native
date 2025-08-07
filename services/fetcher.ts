import axiosInstance from "@/lib/axiosInstance";

export const fetcher = (url:string) => axiosInstance.get(url).then(res => res.data);