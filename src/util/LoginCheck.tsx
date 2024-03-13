"use client";

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { userState, loginCheckHander } from "@/recoil/atom/userState";
import { useSetRecoilState } from "recoil";
import { usePathname } from "next/navigation";

const Header = () => {
  const setUser = useSetRecoilState(userState);
  const refreshToken = getCookie("refreshToken");

  //엑세스 토큰 재발급
  useEffect(() => {
    if (refreshToken) {
      const reissueToken = async (refreshToken: string) => {
        try {
          const response = await fetch("/api/account/refresh", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ refreshToken: refreshToken }),
          });
          const token = await response.json();
          return token;
        } catch (error) {
          console.error("Error reissuing token:", error);
        }
      };
      reissueToken(refreshToken).then((data) => {
        loginCheckHander(data.reToken).then((data) => {
          const isLogin = true;
          setUser({ ...data, isLogin });
        });
      });
    }
  }, [refreshToken]);
  return null;
};

export default Header;
