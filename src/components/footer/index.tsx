import Link from "next/link";
import Container from "../shared/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t min-h-16">
      <Container className="w-full flex flex-col items-start gap-4 lg:flex-row lg:items-center justify-between">
        <section className="order-last lg:order-first">
          <a href="/" className="text-xs group">
            © {currentYear}{" "}
            <span className="group-hover:underline underline-offset-4">
              Eduardo Couto.
            </span>{" "}
            All rights reserved.
          </a>
        </section>
        <nav className="flex flex-col gap-4 lg:flex-row">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
