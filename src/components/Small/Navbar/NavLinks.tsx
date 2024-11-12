import Link from "next/link";

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
