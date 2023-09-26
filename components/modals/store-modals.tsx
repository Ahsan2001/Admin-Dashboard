"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal";



export const StoreModal = () => {
    const storeModal = useStoreModal();


    return (
        <Modal title="title test" description="description test" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
            Form will appear here
        </Modal>
    )
}
