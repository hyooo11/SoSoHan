"use client";
import BottomMenu from "@/component/BottomMenu";
import Header from "@/component/Header";
import ProfileInfo from "@/component/my/ProfileInfo";
import PostList from "@/component/my/PostList";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";

const MyProfilePage = () => {
  const userInfo = useRecoilValue(userState);

  return (
    <>
      <Header logoBtn={true} backBtn={true} toggleBtn={true} />
      <div className="gloval-page">
        <ProfileInfo userInfo={userInfo} />
        <PostList userInfo={userInfo} />
        <BottomMenu />
      </div>
    </>
  );
};
export default MyProfilePage;
