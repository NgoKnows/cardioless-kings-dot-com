"use client";

import boxScore from "@/data/boxScores/processed/1";
export default function Page({ params }: { params: { id: string } }) {
  return <div>Player: {params.id}!!!!</div>;
}
