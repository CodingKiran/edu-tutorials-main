import Link from "next/link";

import { navItems } from "@/lib/nav-items";

export default function NavLinks() {
  return (
    <div className="hidden  md:block">
      <nav id="nav-menu" aria-label="Global">
        <ul className=" flex items-center gap-6 text-md">
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link className="flex items-center gap-6 text-md" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
