"use client";

import { InputProfile } from "@/ui/InputFile";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";
import { editProfile } from "@/api/ProfileAPI";
import { useEffect, useState } from "react";
import { PrimaryBtn } from "@/ui/Button";

const ProfileEdit = () => {
  const [profileData, setProfileDate] = useState<File | null>();
  const [profilePreview, setProfilePreview] = useState<string | null>();
  const userInfo = useRecoilValue(userState);
  useEffect(() => {
    if (userInfo) {
      setProfilePreview(userInfo.profileImg);
    }
  }, []);

  //프로필 이미지 등록
  const addFilesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgFile = e.target.files[0];
      const photoURL = URL.createObjectURL(imgFile);
      if (imgFile) {
        setProfileDate(imgFile);
        setProfilePreview(photoURL);
      }
    }
  };
  //수정 요청
  const profileEditHandler = async () => {
    editProfile().then().catch();
  };

  return (
    <div className="gloval-page">
      <InputProfile
        desc={false}
        priview={profilePreview}
        label={"이미지 업로드"}
        onChange={addFilesData}
      />
      <PrimaryBtn text={"수정"} />
    </div>
  );
};

export default ProfileEdit;
