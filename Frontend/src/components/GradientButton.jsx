import Button from "./Button";

const GradientButton = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        className="
bg-linear-to-r
from-violet-600
via-purple-600
to-fuchsia-600
hover:from-violet-500
hover:via-purple-500
hover:to-fuchsia-500
text-white
font-medium
cursor-pointer
px-6
py-3
rounded-xl
transition-all
duration-300
shadow-lg
shadow-violet-500/20
hover:shadow-violet-500/40
hover:scale-[1.02]
disabled:cursor-not-allowed
disabled:opacity-50
disabled:hover:scale-100
disabled:hover:shadow-none
disabled:from-gray-600
disabled:to-gray-700
"
        ${className}
      `}
    >
      {children}
    </Button>
  );
};

export default GradientButton;