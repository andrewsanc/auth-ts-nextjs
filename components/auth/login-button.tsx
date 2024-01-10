"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton(props: LoginButtonProps) {
  const { children, mode = "redirect", asChild } = props;
  const router = useRouter();

  function onClick() {
    router.push("/auth/login");
  }

  return mode === "modal" ? (
    // Modal implementation
    <span>TODO: Implement Modal</span>
  ) : (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  );
}
