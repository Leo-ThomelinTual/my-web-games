"use client";
import Link from "next/link";
import React from "react";
import InventoryOpening from "@/app/assets/scripts/InventoryHandler/InvOpener";

const QuickAction = () => {
  return (
    <nav className="group mr-1 flex flex-col gap-3 border-r-2 border-white text-white hover:border-white hover:text-white">
      <Link
        className="hover:-translate-x-2.5 hover:rotate-[-10deg] hover:scale-[150%]"
        href="/"
      >
        t
      </Link>
      <button
        className="hover:-translate-x-2.5 hover:rotate-[-10deg] hover:scale-[150%]"
        onClick={() => InventoryOpening()}
      >
        Inv
      </button>
      <Link
        className="hover:-translate-x-2.5 hover:rotate-[-10deg] hover:scale-[150%]"
        href="/"
      >
        t
      </Link>
      <Link
        className="hover:-translate-x-2.5 hover:rotate-[-10deg] hover:scale-[150%]"
        href="/"
      >
        t
      </Link>
    </nav>
  );
};

export default QuickAction;
