"use client"

import { Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ModalProps } from "@/interfaces";



export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    onClose,
    isOpen,
    children
}) => {

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogHeader>
                <DialogTitle> {title} </DialogTitle>
                <DialogDescription> {description}</DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
        </Dialog>
    )

}
