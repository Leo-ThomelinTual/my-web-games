import React from "react";

type RessourceProps = {
  ResourceName: string;
  ResourceStock: number;
  ResourceIcon: string;
};

const ResourceDesplay = ({
  ResourceName,
  ResourceStock,
  ResourceIcon,
}: RessourceProps) => {
  return (
    <section className="flex gap-2 rounded-md border-2 justify-between border-gray-500 bg-black px-2 py-1 text-center text-white">
      <p>{ResourceStock}</p> {/* TODO add if to manage if no stock = 0 */}
      <p>{ResourceName}</p>
      <p>{ResourceIcon}</p>
    </section>
  );
};

export default ResourceDesplay;
