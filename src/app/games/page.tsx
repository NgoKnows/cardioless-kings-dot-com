"use client";
import Image from "next/image";
import games, { gamesGroupedBySeason } from "@/data/games";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const orderedSeasons = Object.keys(gamesGroupedBySeason)
  .map((seasonString) => parseInt(seasonString, 10))
  .sort();

const SeasonSelector = styled.ul`
  display: flex;
`;

const SeasonSelectorSeason = styled.li<{ active: boolean }>`
  & + & {
    margin-left: 8px;
  }

  font-weight: ${({ active }) => (active ? "bold" : undefined)};
`;

const Container = styled.div`
  padding: 16px 48px;
`;

const Games = styled.ul``;

const Game = styled.li`
  display: flex;
  padding: 12px;
  border: 1px solid black;
  flex-direction: column;
  margin-top: 16px;
`;

export default function Home() {
  const [currentSeason, setSeason] = useState(1);
  console.log(gamesGroupedBySeason[currentSeason]);

  return (
    <Container>
      <p>Current season {currentSeason}</p>
      <SeasonSelector>
        {orderedSeasons.map((season) => (
          <SeasonSelectorSeason
            active={currentSeason === season}
            onClick={() => setSeason(season)}
            key={season}
          >
            {season}
          </SeasonSelectorSeason>
        ))}
      </SeasonSelector>

      <div>
        <Games>
          {gamesGroupedBySeason[currentSeason].map((game) => {
            return (
              <Game key={game.id}>
                <Link href={`/games/${game.id}`}>
                  <div>{game.season}</div>
                  <div>{game.teamName}</div>
                  <div>
                    {game.videoUrls.map((url) => (
                      <a key={url.href} href={url.href}>
                        {url.name}
                      </a>
                    ))}
                  </div>
                </Link>
              </Game>
            );
          })}
        </Games>
      </div>
    </Container>
  );
}
