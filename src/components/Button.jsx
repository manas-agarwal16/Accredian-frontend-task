const Button = ({
  className = "bg-[#E91E63] hover:bg-[#ff1362] text-white px-8 py-4 rounded-lg tracking-wide font-medium transition-colors cursor-pointer border-2",
  text = "Refer Now",
  type = "button",
  ...props
}) => {
  return (
    <button {...props} type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
