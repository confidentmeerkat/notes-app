import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes app</title>
        <meta name="description" content="Simple notes app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full flex justify-center">
        <h1 className="text-4xl font-bold text-purple-900 mt-12">Organize everyday life with simple notes!</h1>
      </main>
    </>
  );
}
