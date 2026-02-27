import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <h2>Bienvenue sur my web games lab</h2>

      <article className="flex flex-col my-5 text-blue-500">
        <Link href="/pages/pong">Pong game</Link>
        <Link href="/pages/mmo">MMO-Type game</Link>
      </article>
    </main>
  );
}
