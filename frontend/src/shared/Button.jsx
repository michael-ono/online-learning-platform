/* eslint-disable react/prop-types */
const Button = ({
  children,
  gradient,
  pill,
  auth,
  className,
  onClick,
  disabled,
  type,
  plain,
  loading,
  neutral,
}) => {
  const defaultClasses = gradient
    ? "bg-gradient-to-r from-secondaryColor to-white py-[18px] px-[50px] text-white rounded-[28px] text-[18px] font-medium transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
    : pill
    ? "rounded-[28px] border border-secondaryColor text-lg font-medium py-[18px] px-[50px] text-black hover:bg-secondaryColor"
    : auth
    ? `bg-primaryColor rounded-[5px] text-sm font-medium h-[45px] w-full text-white ${
        disabled ? "" : "hover:bg-white hover:text-primaryColor"
      } border border-primaryColor`
    : plain
    ? "rounded-[28px] text-lg font-medium py-[18px] px-[50px] text-primaryColor hover:bg-flashWhite"
    : neutral
    ? "text-lg font-medium text-secondaryColor"
    : "bg-secondaryColor rounded-[28px] text-lg font-medium py-[18px] px-[50px] text-white hover:bg-flashWhite hover:text-primaryColor border border-secondaryColor";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${defaultClasses} ${
        disabled ? disabledClasses : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
