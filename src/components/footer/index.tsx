import Container from "../shared/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t min-h-16">
      <Container className="w-full flex flex-col items-start gap-4 lg:flex-row lg:items-center justify-between">
        <section className="flex flex-col gap-4 lg:flex-row text-xs">
          <span>Based in Porto, Portugal 🇵🇹</span>
          <span>Working Worldwide. 🌍</span>
        </section>
        <section>
          <a href="/" className="text-xs group">
            © {currentYear}{" "}
            <span className="group-hover:underline underline-offset-4">
              Eduardo Couto.
            </span>{" "}
            All rights reserved.
          </a>
        </section>
      </Container>
    </footer>
  );
}
