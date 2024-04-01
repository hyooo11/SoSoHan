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
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiNaver } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const handle = {
  clickKakaoLogin: () => {
    const clientId = "c20f6dd2b7fb03842631741f73aa2121"; // 앱 키 중 JavaScript 키
    const redirectUri = "http://localhost:3000/auth/social-login/kakao"; // 등록한 Redirect URI

    location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  },
};

type LoginInputType = {
  username: string;
  password: string;
};

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const userStates = useRecoilValue(userState);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();

  const onSubmit: SubmitHandler<LoginInputType> = async (data) => {
    try {
      const user = await loginHander(data);
      const userInfo = {
        isLogin: true,
        token: user.token,
        refreshToken: user.refreshToken,
        pid: user.memberInfo.pid,
        name: user.memberInfo.name,
        nickName: user.memberInfo.nickName,
        email: user.memberInfo.email,
        phone: user.memberInfo.phone,
        regiDate: user.memberInfo.regiDate,
        role: user.memberInfo.role,
        profileImg: user.memberInfo.profileImg,
      };
      if (user.token) {
        setUser({ ...userInfo });
        setCookie("refreshToken", user.refreshToken);
      } else {
        alert("존재하지 않는 계정입니다. 이메일 또는 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    if (userStates.isLogin === true) {
      router.push("/");
      router.replace("/");
    }
  }, [userStates, router]);

  return (
    <div className="Login">
      <div className="logo_area">
        <figure>
          <img src="/media/icon/book_icon.png" />
        </figure>
        <p className="logo">sosohan</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
      </form>
      <div className="login_btn_wrap">
        <div className="social_login_box">
          <button onClick={handle.clickKakaoLogin} className="kakao_">
            <span className="icons">
              <RiKakaoTalkFill />
            </span>
            <span>카카오 계정으로 로그인</span>
          </button>
          <button className="naver_">
            <span className="icons">
              <SiNaver />
            </span>
            <span>네이버 계정으로 로그인</span>
          </button>
          <button className="facebook_">
            <span className="icons">
              <FaFacebookF />
            </span>
            <span>페이스북 계정으로 로그인</span>
          </button>
        </div>
        <Link href="/auth/join" className="email_">
          <span>이메일로 회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
