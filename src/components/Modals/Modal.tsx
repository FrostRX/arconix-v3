import React, { useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Navegation/Button";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModel, setShowModel] = React.useState(isOpen);

  React.useEffect(() => {
    setShowModel(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModel(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (!secondaryAction) return;
    secondaryAction();
  }, [secondaryAction]);

  if (!showModel) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[10000] outline-none focus:outline-none bg-background bg-opacity-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full md:w4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto"
        >
          {/*content*/}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className={`h-full`}
          >
            <div className="h-full md:h-auto rounded-lg shadow-lg relative flex flex-col w-full bg-secondary">
              {/*header*/}
              <div className="flex items-center py-6 rounded-t justify-center relative">
                <button
                  onClick={handleClose}
                  className="absolute outline-none left-9"
                >
                  <IoMdClose className="text-white" size={18} />
                </button>
                <div className="text-lg font-semibold text-white">{title}</div>
              </div>
              {/*body*/}
              <div className="relative flex-auto p-6">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      onClick={handleSecondaryAction}
                      label={`${secondaryActionLabel}`}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    onClick={handleSubmit}
                    label={`${actionLabel || "Aceptar"}`}
                  />
                </div>
                {footer}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
