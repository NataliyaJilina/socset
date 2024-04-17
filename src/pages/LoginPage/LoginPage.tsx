import { Link } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Обязательное поле"),
  userpassword: yup
    .string()
    .required("Введите пароль")
    .min(8, "Не менее 8 символов"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const onLoginFormSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);

  }

  return (
    <SCLoginPage>
      <AppHeading headingText={"Авторизация"} headingType={"h1"} />
      <form onSubmit={handleSubmit(onLoginFormSubmit)}>

        <Controller
          name="useremail"
          control={control}
          render={({field}) => (
            <AppInput isError={errors.useremail ? true: false} errorMessage={errors.useremail?.message} type={"email"} placeholder={"Почта"} {...field} />
          )}
        />

          <Controller
          name="userpassword"
          control={control}
          render={({field}) => (
            <AppInput isError={errors.userpassword ? true: false} errorMessage={errors.userpassword?.message} type={"password"} placeholder={"Пароль"} {...field} />
          )}
        />       
       
          <AppButton buttonText={"Войти"} type={"submit"} />
        
      </form>
      <Link to="#">Забыли пароль?</Link>
      <div className="registration">
        <span>
          У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
        </span>
        <p>Войти с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
