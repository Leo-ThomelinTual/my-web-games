"use client";
import { MinionWork } from "@/app/assets/scripts/Minions/Minion";

const AutoFarm = () => {
  return (
    <section className="grid h-max w-125 grid-cols-[auto_10px_auto] gap-2 rounded-md border-2 border-gray-700 bg-black p-2 text-white">
      <section>
        <article className="flex w-full flex-col gap-2 p-2">
          <button onClick={() => MinionWork("Mineur")}>Test</button>
          <article className="flex justify-between">
            <p>Farmer</p>
            <p>[ 25 ]</p>
          </article>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>

        <article className="flex w-full flex-col gap-2 p-2">
          <article className="flex justify-between">
            <p>Farmer</p>
            <p>[ 25 ]</p>
          </article>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <article className="flex justify-between">
            <p>Farmer</p>
            <p>[ 25 ]</p>
          </article>

          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Mineur</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Farmer</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Mineur</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
      </section>
      <div className="h-full w-[5px] bg-gray-500/50" />
      <section>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Farmer</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Mineur</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Farmer</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Mineur</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Farmer</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
        <article className="flex w-full flex-col gap-2 p-2">
          <h2>Mineur</h2>
          <div className="xptest h-2.5 w-0 rounded-sm border-2 border-gray-500/50 bg-green-500 px-2" />
        </article>
      </section>
    </section>
  );
};

export default AutoFarm;
