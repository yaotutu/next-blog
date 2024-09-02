import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="gap-[10px] flex-1 lg:text-[32px] md:text-[24px] lg:text-left  hidden lg:flex">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={"flex-1 text-center text-[36px] font-bold"}>垚土土</div>
      <div className={"flex items-center gap-[20px] flex-1 text-[20px] xl:text-[18px] xl:gap-[15px] sm:justify-end"}>
        <ThemeToggle />
        <Link href="/" className={"hidden sm:inline"}>Homepage</Link>
        <Link href="/" className={"hidden sm:inline"}>Contact</Link>
        <Link href="/" className={"hidden sm:inline"}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;