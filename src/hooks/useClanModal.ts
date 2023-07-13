import { create } from "zustand";

interface ClanModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useClanModal = create<ClanModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useClanModal;
