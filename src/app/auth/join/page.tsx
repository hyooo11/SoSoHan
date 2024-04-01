import Header from "@/component/Header";
import Join from "@/component/auth/Join";

const JoinPage = () => {
  return (
    <>
      <Header
        logoBtn={false}
        headTitle={"이메일로 가입하기"}
        backBtn={true}
        toggleBtn={false}
      />
      <Join />
    </>
  );
};

export default JoinPage;
