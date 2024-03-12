import { atom } from "recoil";
import { setCookie } from "cookies-next";

type MemberInfoType = {
  pid: number;
  name: string;
  nickName: string;
  email: string;
  phone: string;
  regiDate: string;
  role: string;
};

interface UserStateType {
  isLogin: boolean;
  token: string;
  refreshToken: string;
  memverInfo: MemberInfoType | null;
}

export const userState = atom<UserStateType>({
  key: "user",
  default: {
    isLogin: false,
    token: "",
    refreshToken: "",
    memverInfo: null,
  },
});

export const loginHander = async (data: {
  username: string;
  password: string;
}) => {
  const response = await fetch("/account/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};
