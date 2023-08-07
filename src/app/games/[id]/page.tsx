"use client";

import games, { gamesGroupedBySeason } from "@/data/games";
console.log(games, gamesGroupedBySeason);
export default function Page({ params }: { params: { id: string } }) {
  // console.log(data);

  return <div>Game: {params.id}!!!!</div>;
}
