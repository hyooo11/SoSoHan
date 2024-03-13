"use client";

import NavMenu from "@/component/NavMenu";
import PostSearch from "@/component/PostSearch";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { userState, loginCheckHander, logout } from "@/recoil/atom/userState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const setUser = useSetRecoilState(userState);
  const userStates = useRecoilValue(userState);
  console.log(userStates);

  const [searchToggle, setSearchToggle] = useState(false);
  const [navToggle, setnNavToggle] = useState(false);
  const refreshToken = getCookie("refreshToken");

  //엑세스 토큰 재발급
  useEffect(() => {
    if (refreshToken) {
      const reissueToken = async (refreshToken: string) => {
        try {
          const response = await fetch("/account/refresh", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ refreshToken: refreshToken }),
          });
          const token = await response.json();
          // console.log(data);
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

  if (pathname.includes("/auth/login")) return null;
  return (
    <>
      <div className="Header">
        <h1 className="logo">SOSOHAN</h1>
        <div className="nav_btn_area">
          <p
            onClick={() => {
              setSearchToggle(!searchToggle);
            }}
            className="search_btn"
          >
            <IoSearch />
          </p>
          <p
            onClick={() => {
              setnNavToggle(!navToggle);
            }}
            className="nav_btn"
          >
            {navToggle ? <IoClose /> : <RxHamburgerMenu />}
          </p>
        </div>
      </div>
      {searchToggle ? <PostSearch /> : ""}
      {navToggle ? <NavMenu /> : ""}
    </>
  );
};

export default Header;
