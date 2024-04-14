"use client";

import NavMenu from "@/component/NavMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

const Header = ({
  logoBtn,
  headTitle,
  backBtn,
  toggleBtn,
}: {
  logoBtn: boolean;
  headTitle?: string;
  backBtn: boolean;
  toggleBtn: boolean;
}) => {
  const router = useRouter();
  const [navToggle, setnNavToggle] = useState(false);

  return (
    <>
      <div className="Header">
        {logoBtn ? (
          <h1 className="logo">
            <Link href="/">SOSOHAN</Link>
          </h1>
        ) : (
          <h1 className="page_tit">{headTitle}</h1>
        )}

        {backBtn ? (
          <button onClick={() => router.back()} className="back_btn">
            <IoChevronBack />
          </button>
        ) : (
          <span></span>
        )}
        {toggleBtn ? (
          <div className="nav_btn_area">
            <p
              onClick={() => {
                setnNavToggle(!navToggle);
              }}
              className="nav_btn"
            >
              {navToggle ? <IoClose /> : <RxHamburgerMenu />}
            </p>
          </div>
        ) : (
          <span></span>
        )}
      </div>
      {navToggle ? <NavMenu /> : ""}
    </>
  );
};

export default Header;
