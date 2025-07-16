import type { AuthStoreData, AuthStoreState } from "@/types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      authStore: null,
      setAuthData: (data: Partial<AuthStoreData>) =>
        set((state) => {
          if (!state.authStore) {
            return { authStore: data as AuthStoreData };
          }
          return {
            authStore: {
              ...state.authStore,
              ...data,
            },
          };
        }),
      clearAuthData: () => set({ authStore: null }),
    }),
    {
      name: "bleoo-auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export { useAuthStore };
