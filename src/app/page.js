"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const handleClick = () => {
    alert("Clicked");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <Link href={"/login"}>
     <Button onClick={handleClick} className="rounded-full m-5"> Login </Button>
      </Link>
      <Link href={"/register"}>
     <Button onClick={handleClick} className="rounded-full m-5"> Register </Button>
      </Link>
    </div>
  );
}
