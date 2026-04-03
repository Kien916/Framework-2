// src/stores/useAuthStores.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name?: string;
  email: string;
  avatar?: string;
  token?: string; 
};

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
      logout: () => set({ user: null }), 
    }),
    {
      name: "auth-storage", 
    },
  ),
);