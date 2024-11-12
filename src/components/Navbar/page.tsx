"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import {} from "next-auth/react";
import NavLinks from "../Small/Navbar/NavLinks";
import HamburgerMenu from "../Small/Navbar/HamburgerMenu";
import Logo from "../Small/Navbar/Logo";

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
      <div className="relative flex justify-between ">
        <button
          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={() => signOut()}
        >
          Log out
        </button>

        <button className="flex items-center">
          {userImage && (
            <Image
              src={userImage!} // Assuming the user image is stored in session.user.image
              alt={session?.user?.name || "user-image"}
              className="h-8 w-8 rounded-full" // Adjust size and shape as needed
              width={40}
              height={40}
            />
          )}
        </button>
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
