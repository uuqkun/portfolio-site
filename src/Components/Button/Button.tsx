interface IButtonProps {
  text: string;
  variant: string;
}

const Button = ({ text, variant}: IButtonProps) => {
  return (
    <button type="button" className={`btn ${variant} font-semibold`}>
      {text}
    </button>
  );
};

export default Button;
