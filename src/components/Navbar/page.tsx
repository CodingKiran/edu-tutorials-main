"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import NavLinks from "../Small/Navbar/NavLinks";
import HamburgerMenu from "../Small/Navbar/HamburgerMenu";
import Logo from "../Small/Navbar/Logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  const Login = () => {
    return (
      <button
        onClick={() => signIn("google")}
        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
      >
        Login
      </button>
    );
  };

  const LogOut = () => {
    const userImage = session?.user?.image;
    return (
      <div className="relative flex justify-between gap-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {userImage && (
              <Image
                src={userImage}
                alt={session?.user?.name || "user-image"}
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={"/dashboard"}>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

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
