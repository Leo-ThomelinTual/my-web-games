import React from "react";

const Input = () => {
  return (
    <section className="absolute bottom-0 my-10 flex h-max w-full justify-center text-white">
      <input
        id="input"
        type="text"
        placeholder="type here"
        className="h-[3em] w-[90%] rounded-md border-2 border-white p-3"
      />
      <button
        id="input-button"
        type="button"
        className="mx-2 cursor-pointer rounded-md border-2 px-5"
      >
        Entrer
      </button>
    </section>
  );
};

export default Input;
