const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
  className = "",
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm text-slate-300 font-medium">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-white/10
          bg-white/0.03
          backdrop-blur-lg
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

export default Input;