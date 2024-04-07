interface IButtonProps {
  text: string;
  variant: string;
}

const Button = ({ text, variant}: IButtonProps) => {
  return (
    <button type="button" className={`btn ${variant} font-normal`}>
      {text}
    </button>
  );
};

export default Button;
