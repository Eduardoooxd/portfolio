import Container from "@/components/shared/container";

export default function ContactPage() {
  return (
    <main className="flex grow w-full h-full body-background-texture">
      <Container>
        <section className="flex flex-col items-center">
          <article className="grid grid-cols-1 sm:grid-cols-2 py-24">
            <div className="flex flex-col bg-white">
              <div className="">
                <h2 className="text-4xl">Contact me</h2>
              </div>
              <div className="text-xs flex gap-1">
                <span>✉️</span>
                <p>Prefer email ? It's contacts@eduardocouto.dev</p>
              </div>
            </div>
            <div className="bg-white">
              <p className="text-sm text-balance">
                Use the form below to inquire about work. If we're a good fit,
                I’ll get back to you with a link to schedule our first call.
              </p>
            </div>
          </article>

          <article>
            <hr />
          </article>
        </section>
      </Container>
    </main>
  );
}
