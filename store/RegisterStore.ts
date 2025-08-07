// store/RegisterStore.ts
import { create } from "zustand";

export type RegisterFormData = {
  fullName: string;
  userName: string;
  studentStatus: string;
  email: string;
  password: string;
  yearClass?: string;
  residency?: string;
  hall?: string;
  affiliatedGroups?: string[];
  yearGroup?: string;
  occupation?: string;
};

interface RegisterStore {
  registerData: Partial<RegisterFormData>;
  setRegisterData: (data: Partial<RegisterFormData>) => void;
  clearRegisterData: () => void;
}

export const useRegisterStore = create<RegisterStore>()((set) => ({
  registerData: {},
  setRegisterData: (data) =>
    set((state) => ({
      registerData: {
        ...state.registerData,
        ...data,
      },
    })),
  clearRegisterData: () => set({ registerData: {} }),
}));
