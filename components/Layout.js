import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta charSet="utf-8" />

        <meta content={description} name="Description" />

        <title>{pageTitle}</title>

        <link
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net"
          rel="preconnect"
        />
      </Head>

      <main className="p-3">
        <header className="header flex justify-between items-center text-base">
          <Link href="/">
            <a className="flex items-center text-lg font-bold">
              <Image
                alt="logo"
                className="mr-2 w-5 h-5"
                height={20}
                src="/terminal.svg"
                width={20}
              />
              Manon.Icu
            </a>
          </Link>

          <nav className="text-xs">
            <Link href="https://github.com/Manonicu/site">
              <a className="py-2 px-3">Source</a>
            </Link>

            <Link href="https://github.com/Manonicu">
              <a className="py-2 px-3 bg-black text-white">Follow Me</a>
            </Link>
          </nav>
        </header>

        <div className="content py-5 mx-auto">{children}</div>
      </main>
    </>
  );
}
