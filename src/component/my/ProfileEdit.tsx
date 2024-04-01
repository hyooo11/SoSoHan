"use client";

import { InputProfile } from "@/ui/InputFile";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";
import { editProfile } from "@/api/ProfileAPI";
import { useEffect, useState } from "react";
import { PrimaryBtn } from "@/ui/Button";
import { useRouter } from "next/navigation";

const ProfileEdit = () => {
  const [profileData, setProfileDate] = useState<File | null>();
  const [profilePreview, setProfilePreview] = useState<string | null>();
  const router = useRouter();
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
  const profileEditHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼의 기본 동작 방지

    const formData = new FormData();
    formData.append("userid", JSON.stringify(userInfo.pid));
    if (profileData) {
      formData.append("profileImg", profileData);
    }
    await editProfile(formData)
      .then((res) => {
        alert("프로필 수정 완료입니다!");
        router.replace("/");
        return res.json();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="gloval-page">
      <form onSubmit={profileEditHandler}>
        <InputProfile
          desc={false}
          priview={profilePreview}
          label={"이미지 업로드"}
          onChange={addFilesData}
        />
        <PrimaryBtn text={"수정"} />
      </form>
    </div>
  );
};

export default ProfileEdit;
