"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { InputFormIconLabel } from "@/ui/InputForm";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState, loginHander } from "@/recoil/atom/userState";
import { PrimaryBtn } from "@/ui/Button";
import { FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { setCookie } from "cookies-next";

type LoginInputType = {
  username: string;
  password: string;
};

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const todoList = useRecoilValue(userState);
  console.log(todoList);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();

  const onSubmit: SubmitHandler<LoginInputType> = async (data) => {
    console.log(data);
    try {
      const user = await loginHander(data);
      if (user.token) {
        const isLogin = true;
        setUser({ ...user, isLogin });
        setCookie("refreshToken", user.refreshToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login">
      <div className="logo_area">
        <figure>
          <img src="/media/icon/book_icon.png" />
        </figure>
        <p className="logo">sosohan</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormIconLabel
          icon={<FaUserLarge />}
          type={"email"}
          name={"username"}
          register={register}
        />
        <InputFormIconLabel
          icon={<FaLock />}
          type={"password"}
          name={"password"}
          register={register}
        />
        <PrimaryBtn text={"이메일로 로그인"} />
        <Link href="/auth/join">회원가입</Link>
      </form>
      <button>카카오로 시작</button>
      <button>네이버로 시작</button>
      <button>페이스북으로 시작</button>
    </div>
  );
};

export default Login;
