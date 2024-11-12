"use client";

import { useSession } from "next-auth/react";
import { Login, LogOut } from "@/components/Small/Navbar/LoginFunctions";
import NavLinks from "../Small/Navbar/NavLinks";
import HamburgerMenu from "../Small/Navbar/HamburgerMenu";
import Logo from "../Small/Navbar/Logo";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header
      className=" mt-2 bg-white backdrop-blur-md shadow-md w-full
              sticky top-0 left-0 right-0 z-10"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <NavLinks />

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {session ? LogOut() : Login()}
            </div>

            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
