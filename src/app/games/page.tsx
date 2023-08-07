"use client";
import Image from "next/image";
import games, { gamesGroupedBySeason } from "@/data/games";
import { useState } from "react";

const orderedSeasons = Object.keys(gamesGroupedBySeason)
  .map((seasonString) => parseInt(seasonString, 10))
  .sort();

export default function Home() {
  const [currentSeason, setSeason] = useState(1);

  return (
    <div>
      <p>Current season {currentSeason}</p>
      <ul>
        {orderedSeasons.map((season) => (
          <li onClick={() => setSeason(season)} key={season}>
            {season}
          </li>
        ))}
      </ul>

      <div>
        <ul>
          {gamesGroupedBySeason[currentSeason].map((game) => {
            return (
              <li key={game.id}>
                <div>{game.id}</div>
                <div>{game.season}</div>
                <div>{game.teamName}</div>
                <div>
                  {game.videoUrls.map((url) => (
                    <a key={url.href} href={url.href}>
                      {url.name}
                    </a>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
