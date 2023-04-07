import { StyledButton } from "./style";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return <StyledButton onClick={() => onClick()}>{text}</StyledButton>;
};
