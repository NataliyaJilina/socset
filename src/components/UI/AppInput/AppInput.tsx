import { SCAppInput } from "./AppInput.styled";

type AppInputProps = {
  inputType: string;
  inputPlaceholder: string;
};

export const AppInput = ({ inputPlaceholder, inputType }: AppInputProps) => {
  return <SCAppInput type={inputType} placeholder={inputPlaceholder} />;
};
