import react from "react";

const Button = ({
  classname = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors",
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
