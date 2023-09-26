import { create } from 'zustand'
import { useStoreModalStore } from '@/interfaces'



export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))