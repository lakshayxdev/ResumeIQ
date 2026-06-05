const Modal = ({
  isOpen,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">

      <div className="relative w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;