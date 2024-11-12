import Link from "next/link";

export default function NavLinks(){
    return(
        <div className="hidden  md:block">
        <nav id="nav-menu" aria-label="Global">
          <ul className=" flex items-center gap-6 text-md">
            <div className="relative"></div>
            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/resources"
              >
                Free Resources
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/blog"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}