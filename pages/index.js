import Head from 'next/head';
import NextImage from 'next/image';
import Logo from '../icons/logo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ONE X THREE</title>
        <meta
          name="description"
          content="Bangladesh based film production company dedicated to producing exceptional content. One X Three specializes in short films, editing, cinematography and music videos."
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
        <section className="relative h-screen min-h-[550px] w-screen overflow-hidden">
          <div className="grid h-full items-center justify-center">
            <NextImage
              src="/images/backgrounds/hero.jpg"
              alt=""
              width={1440}
              height={810}
              priority={1}
              layout="fixed"
              className="aspect-video"
            />
          </div>

          <div className="absolute top-0 left-0 z-10 grid h-full w-screen items-center justify-center">
            <div className="h-[82px] w-[480px] sm:h-[54px] sm:w-[320px]">
              <Logo />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
