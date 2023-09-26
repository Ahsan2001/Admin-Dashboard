export interface ModalProps {
    title: string;
    description: string;
    onClose: () => void;
    isOpen: boolean;
    children?: React.ReactNode;
}


export interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}