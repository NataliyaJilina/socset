import { Link, useNavigate } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch, useSelector } from "react-redux";
// import { changeUser } from "../../store/slices/userSlice";
// import { RootState } from "../../store/store";
import { useLoginUserMutation } from "../../store/api/userApi";
import { useEffect } from "react";


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

// const mockUser = {
//   mail: "string@mail.com",
//   phone_number: "12345678",
//   user_id: 1,
//   name: "Vasya",
//   reg_date: new Date().toISOString(),
//   city: "Tashkent",
// }

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  // const user = useSelector((state: RootState) => state.userSlice.user)
  const [loginUser, {data, error, isLoading, isSuccess }] = useLoginUserMutation()

console.log(data)

  useEffect(()=>{
    if(data?.user_id) {
      navigate("/main")
      localStorage.setItem("user_id", JSON.stringify(data.user_id))
    } else {
      alert ("Букет Цветов и может я подумаю <3") 
      navigate("/")}
}, [data, navigate])

  const onLoginFormSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({email: data.useremail, password: data.userpassword})
  };

    // data ? navigate("/main") : navigate("/");
    // if (data){
    //   navigate("/main")
    // }else{
    //   navigate("/")
    // }

    // if (data.useremail == mockUser.mail) {
    //   navigate("/main");
    // } else {
    //   navigate("/");
    //   alert("Неверный e-mail")
    // }

    // if (data.userpassword == "12345678") {
    //   navigate("/main");
    // } else {
    //   navigate("/");
    //   alert("Неверный пароль")
    // }
    // console.log("USER: ", user)

    // dispatch(changeUser(mockUser))
// }

  return (
    <SCLoginPage>
      <AppHeading headingText={"Авторизация"} headingType={"h1"} />
      {/* {isLoading && <h1>Loading...</h1>} */}
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
