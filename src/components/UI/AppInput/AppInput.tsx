import { ErrorMessage, SCAppInput } from "./AppInput.styled";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = ({
  type,
  placeholder,
  required,
  isError,
  errorMessage,
  ...props
}: IInputProps) => {
  return (
    <div>
    <SCAppInput 
      $isError={isError || false}
      type={type}
      placeholder={placeholder}
      required={required}
      {...props}
    />
    {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
