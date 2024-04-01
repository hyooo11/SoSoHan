"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const KaKaoLoginPage = () => {
  const [user, setUser] = useState<any>([]);
  const searchParams = useSearchParams();

  console.log(user);

  useEffect(() => {
    const code = searchParams.get("code") as string;
    kakaoLogin(code)
      .then((response) => setUser(response))
      .catch((err) => console.log(err));
  }, [searchParams]);

  const kakaoLogin = async (code: string) => {
    const response = await fetch(`/api/social/kakao?code=${code}`);
    return response;
  };

  return <div>카카로 로그인 완료하기</div>;
};

export default KaKaoLoginPage;
