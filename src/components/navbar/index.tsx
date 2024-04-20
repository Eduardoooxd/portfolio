import Link from "next/link";
import CodeIcon from "../icons/codeIcon";
import Container from "../shared/container";
import NavbarLink, { NavbarLinkProps } from "./navbarLink";

export default function Navbar() {
  const NAV_LINKS: NavbarLinkProps[] = [
    {
      title: "Projects",
      href: "#",
    },
    {
      title: "Skills",
      href: "#",
    },
    {
      title: "Career",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];

  return (
    // TODO: Put Background color
    // Not using position sticky due to flickering on mobile, using fixed instead.
    <>
      <header className="w-full fixed top-0 left-0 border-b z-10 bg-white">
        <Container className="flex justify-between">
          <Link className="flex items-center gap-2" href="/">
            <CodeIcon />

            <h1 className="text-xl font-bold">Eduardo Couto</h1>
          </Link>
          {/* Add Navigation Menu from shadcn */}
          <nav className="hidden lg:items-center lg:justify-around lg:gap-4 lg:flex">
            {NAV_LINKS.map((navLink) => (
              <NavbarLink key={navLink.title} {...navLink}></NavbarLink>
            ))}
          </nav>
        </Container>
      </header>
      {/* Adding dummy div to have sticky behaviour */}
      <div className="w-full min-h-[4.75rem]"></div>
    </>
  );
}
