"use client";

import { useEffect, useState } from "react";

export default function SetScreenHeight({
  children,
}: {
  children: React.ReactNode;
}) {
  const [vh, setVh] = useState<number>(0);
  const setHeight = () => {
    const vh = window.innerHeight * 0.01;
    setVh(vh);
  };
  console.log(vh);
  useEffect(() => {
    setHeight();
    // resize 이벤트가 발생하면 다시 계산
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <div className="gloval-wrap" style={{ height: `${100 * vh}px` }}>
      {children}
    </div>
  );
}
