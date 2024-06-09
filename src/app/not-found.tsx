import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-dh-screen-without-nav flex flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-base font-semibold sm:text-2xl">Page not found - Seems you look lost</h2>
      <Link href="/" className="underline">
        Click here to go back home
      </Link>
    </div>
  );
}
