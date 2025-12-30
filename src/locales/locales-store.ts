import { create } from "zustand";

interface LanguageState {
  isPending: boolean;
  setPending: (status: boolean) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  isPending: false,
  setPending: (status) => set({ isPending: status }),
}));
