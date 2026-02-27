"use client";
import { MinionWork } from "@/app/assets/scripts/Minions/Minion";

const AutoFarm = () => {
  return (
    <section className="grid h-max w-125 grid-cols-[auto_10px_auto] gap-2 rounded-md border-2 border-gray-700 bg-black p-2 text-white">
      <section>
        <article className="flex w-full flex-col gap-2 p-2">
          <button onClick={() => MinionWork("Mineur")}>Test</button>
        </article>
      </section>
    </section>
  );
};

export default AutoFarm;
