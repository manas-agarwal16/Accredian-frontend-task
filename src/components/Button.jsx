import react from "react";

const Button = ({
  classname="bg-[#E91E63] hover:bg-[#ff1362] text-white px-8 py-4 rounded-lg tracking-wide font-medium transition-colors",
  text = "Refer Now",
  type = "submit",
  ...props
}) => {
  return (
    <button {...props} type={type} className={classname}>
      {text}
    </button>
  );
};

export default Button;
