"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KaKaoLoginPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code") as string;
    console.log(code);
    kakaoLogin(code);
  }, [searchParams]);

  const kakaoLogin = async (code: string) => {
    const res = await fetch(`/kakao/login?code=${code}`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));

    console.log(res);
  };

  return <div>카카로 로그인 완료하기</div>;
};

export default KaKaoLoginPage;
