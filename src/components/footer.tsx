import Container from './shared/container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-16 w-full border-t">
      <Container className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <section className="flex flex-col gap-4 text-xs lg:flex-row">
          <span>Based in Porto, Portugal 🇵🇹</span>
          <span>Working Worldwide. 🌍</span>
        </section>
        <section>
          <a href="/" className="group text-xs">
            © {currentYear}{' '}
            <span className="underline-offset-4 group-hover:underline">Eduardo Couto.</span> All
            rights reserved.
          </a>
        </section>
      </Container>
    </footer>
  );
}
