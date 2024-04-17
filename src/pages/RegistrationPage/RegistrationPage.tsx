import { Link } from "react-router-dom";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "../LoginPage/LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegForm {
  username: string;
  useremail: string;
  userphone: string;
  userpassword: string;
  usercity: string;
}

const regFormSchema = yup.object({
  useremail: yup.string().required("Обязательное поле"),
  userpassword: yup
    .string()
    .required("Введите пароль")
    .min(8, "Не менее 8 символов"),
  username: yup.string().required("Введите имя"),
  userphone: yup.string().required("Номер телефона"),
  usercity: yup.string().required("Ваш город"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regFormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      userphone: "",
      userpassword: "",
      usercity: "",
    },
  });

  const onRegFormSubmit: SubmitHandler<IRegForm> = (data) => {
    console.log(data);
  };

  return (
    <SCLoginPage>
      <AppHeading headingText="Регистрация" headingType={"h1"} />

      <form onSubmit={handleSubmit(onRegFormSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <AppInput type={"text"} placeholder={"Имя"} {...field} />
          )}
        />

        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <AppInput type={"email"} placeholder={"Почта"} {...field} />
          )}
        />

        <Controller
          name="userphone"
          control={control}
          render={({ field }) => (
            <AppInput type={"tel"} placeholder={"Номер телефона"} {...field} />
          )}
        />

        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <AppInput type={"password"} placeholder={"Пароль"} {...field} />
          )}
        />

        <Controller
          name="usercity"
          control={control}
          render={({ field }) => (
            <AppInput type={"text"} placeholder={"Город"} {...field} />
          )}
        />
        {/* <AppInput inputType={"text"} inputPlaceholder={"Введите имя"} />
        <AppInput inputType={"email"} inputPlaceholder={"Почта"} />
        <AppInput inputType={"tel"} inputPlaceholder={"Номер телефона"} />
        <AppInput inputType={"password"} inputPlaceholder={"Пароль"} />
        <AppInput inputType={"text"} inputPlaceholder={"Город"} /> */}

        <AppButton buttonText={"Зарегистрироваться"} type={"submit"} />
      </form>

      <div className="registration">
        <span>
          Уже есть аккаунт? <Link to="/">Войти</Link>
        </span>
        <p>Регистрация с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
