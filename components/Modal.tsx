interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Close modal if the click is on the overlay, not the white box
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center modal-overlay z-50"
    >
      <div className="rounded-2xl p-5 w-full max-w-xs sm:max-w-sm bg-white text-black">
        {children}
      </div>
    </div>
  );
}
