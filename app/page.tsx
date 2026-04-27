"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const saved = window.localStorage.getItem("preferred-locale");
    const locale = saved === "en" ? "en" : "ru";
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
