import { atom, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { deleteCookie } from "cookies-next";

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

const { persistAtom } = recoilPersist();
export const userState = atom<UserStateType>({
  key: "user",
  default: {
    isLogin: false,
    token: "",
    refreshToken: "",
    memverInfo: null,
  },
  effects_UNSTABLE: [persistAtom],
});

//초기 로그인
export const loginHander = async (data: {
  username: string;
  password: string;
}) => {
  const response = await fetch("/api/account/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};

//로그인 체크
export const loginCheckHander = async (token: string) => {
  const response = await fetch("/api/account/login-check", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  return response.json();
};

export const logout = async () => {
  localStorage.removeItem("recoil-persist");
  deleteCookie("refreshToken");
  window.location.replace("/");
};
