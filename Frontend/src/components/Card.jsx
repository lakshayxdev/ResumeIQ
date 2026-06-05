const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-[#111827]/60
         transition-all duration-300 hover:translate-y-1 hover:scale-[1.02]
        rounded-2xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;