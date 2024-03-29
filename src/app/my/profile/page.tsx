"use client";
import BottomMenu from "@/component/BottomMenu";
import Header from "@/component/Header";
import ProfileInfo from "@/component/my/ProfileInfo";
import PostList from "@/component/my/PostList";
import { userState, UserStateType } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

const MyProfilePage = () => {
  const userInfo = useRecoilValue(userState);

  return (
    <>
      <Header backBtn={true} />
      <div className="gloval-page">
        <ProfileInfo userInfo={userInfo} />
        <PostList userInfo={userInfo} />
        <BottomMenu />
      </div>
    </>
  );
};
export default MyProfilePage;
