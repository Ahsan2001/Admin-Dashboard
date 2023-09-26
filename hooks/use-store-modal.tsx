import { useStoreModalStore } from '@/interfaces'
import { create } from 'zustand'




export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));