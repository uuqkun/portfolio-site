interface IButtonProps {
  text: string;
  variant?: string;
  onClick?: () => void;
}

const Button = ({ text, variant, onClick }: IButtonProps) => {
  return (
    <button
      type="button"
      className={`btn ${variant} font-semibold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
