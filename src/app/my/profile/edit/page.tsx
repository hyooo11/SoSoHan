import Header from "@/component/Header";
import ProfileEdit from "@/component/my/ProfileEdit";

const ProfileEditPage = () => {
  return (
    <>
      <Header
        logoBtn={false}
        headTitle={"프로필 이미지 수정"}
        backBtn={true}
        toggleBtn={true}
      />
      <ProfileEdit />
    </>
  );
};

export default ProfileEditPage;
