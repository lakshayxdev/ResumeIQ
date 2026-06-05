const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 8,
  className = "",
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm text-slate-300 font-medium">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full
          resize-none
          rounded-xl
          border
          border-white/10
          bg-white/0.03
          backdrop-blur-lg
          px-4
          py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400/50
          focus:ring-2
          focus:ring-cyan-500/20
          ${className}
        `}
      />
    </div>
  );
};

export default TextArea;