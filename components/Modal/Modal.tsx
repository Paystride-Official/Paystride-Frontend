import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalProps,
} from "@nextui-org/react";

type ModalProp = {
  isOpen: boolean;
  closeModal: () => void;
  body: ReactNode;
  title?: ReactNode;
  size?: any;
  paddingX?: React.CSSProperties;
};

export default function ModalPopUp({
  isOpen,
  closeModal,
  title,
  body,
  size,
  paddingX,
}: ModalProp) {
  const [scrollBehavior, setScrollBehavior] =
    React.useState<ModalProps["scrollBehavior"]>("inside");

  return (
    <div className="w-full">
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        placement="center"
        size={size}
        scrollBehavior={scrollBehavior}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        classNames={{
          backdrop: "w-full",
          // base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        }}
      >
        <ModalContent style={paddingX}>
          <>
            <ModalHeader className="flex flex-col gap-1 capitalize items-center">
              {title}
            </ModalHeader>
            <ModalBody className="p-2">{body}</ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
