import { signIn } from "next-auth/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export const Login = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
    >
      Login
    </button>
  );
};

export const LogOut = () => {
  const { data: session } = useSession();
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
        <Image
          src={userImage!} // Assuming the user image is stored in session.user.image
          alt={session?.user?.name || "user-image"}
          className="h-8 w-8 rounded-full" // Adjust size and shape as needed
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};
