type AppButtonProps = {
  buttonText: string;
};

export const AppButton = ({ buttonText }: AppButtonProps) => {
  return <button>{buttonText}</button>;
};
