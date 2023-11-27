import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

type ModalProp = {
  isOpen: boolean;
  closeModal: () => void;
  body: ReactNode;
  title: ReactNode;
  footer?: ReactNode;
};

export default function ModalPopUp({
  isOpen,
  closeModal,
  title,
  body,
  footer,
}: ModalProp) {
  return (
    <div className="w-full">
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        placement="center"
        classNames={{
          backdrop: "w-full",
          // base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        }}
      >
        <ModalContent className="px-16">
          <>
            <ModalHeader className="flex flex-col gap-1 capitalize items-center">
              {title}
            </ModalHeader>
            <ModalBody className="p-2">{body}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
