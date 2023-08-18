"use client";
import boxScore from "@/data/boxScores/processed/1";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      Game: {params.id}!!!!
      <div>{JSON.stringify(boxScore, null, 2)}</div>
    </div>
  );
}
