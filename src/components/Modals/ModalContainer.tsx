import React from "react";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function ModalContainer({ children, open }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-opacity-80 bg-background backdrop-blur-sm justify-center items-center z-[100] ${
        open ? "flex" : "hidden"
      }
    `}
    >
      <div>{children}</div>
    </div>
  );
}
