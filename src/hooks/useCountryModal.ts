import { create } from "zustand";

interface CountryModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCountryModal = create<CountryModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCountryModal;
