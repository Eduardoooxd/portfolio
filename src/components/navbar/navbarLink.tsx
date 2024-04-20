import Link from "next/link";

export type NavbarLinkProps = {
  title: string;
  href: string;
  disabled?: boolean;
};

export default function NavbarLink({ title, href, disabled }: NavbarLinkProps) {
  return (
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      href={href}
      aria-disabled={disabled}
    >
      {title}
    </Link>
  );
}
