"use client";

export default function Page({ params }: { params: { id: string } }) {
  return <div>Player: {params.id}!!!!</div>;
}
