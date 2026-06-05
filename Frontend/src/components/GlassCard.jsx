const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/0.03
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;