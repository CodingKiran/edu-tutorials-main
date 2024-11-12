import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    id: "courses",
    label: "Courses",
    href: "/courses",
  },
  {
    id: "resources",
    label: "Free Resources",
    href: "/resources",
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

export default function HamburgerMenu() {
  return (
    <div className="block md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-4 mx-4">
          <DropdownMenuGroup>
            <ul className="flex flex-col gap-4 px-4 py-2">
              {navItems.map(({ id, label, href }) => (
                <li key={id}>
                  <Link className="flex items-center gap-6 text-md" href={href}>
                    <DropdownMenuItem>{label} </DropdownMenuItem>
                  </Link>
                </li>
              ))}
            </ul>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
