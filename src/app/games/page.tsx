"use client";
import Image from "next/image";
import games, { gamesGroupedBySeason } from "@/data/games";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSqlDB, SqlDBContext, convertDataToObjects } from "@/context/sqlDB";
import { getAllGamesBySeason } from "@/utils/sql";
import { useRouter } from "next/navigation";

function getYouTubeThumbnailUrl(youtubeLink: string) {
  const videoId = extractVideoId(youtubeLink);
  if (!videoId) {
    return null; // Invalid or unsupported link
  }

  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function extractVideoId(youtubeLink: string) {
  // Regular expression to match YouTube URLs
  const pattern =
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z0-9_-]+)/;
  const match = youtubeLink.match(pattern);

  if (match) {
    return match[1] || match[2]; // Get the video ID from the match
  }

  return null; // No match or unsupported link
}

const cardColors = [
  "#A56DA6",
  "#52498C",
  "#85A663",
  "#F2D272",
  "#731717",
  "#495873",
  "#D0BFB4",
  "#B94933",
  "#1C4835",
  "#6F2E35",
  "#033B61",
  "#F2C572",
  "#79A3D9",
];

const SeasonSelectorLabel = styled.p`
  text-transform: uppercase;
  font-size: 16px;
`;

const SeasonSelector = styled.ul`
  display: flex;
  margin-top: 2px;
  font-size: 21px;
  gap: 0px 8px;
`;

const SeasonSelectorSeason = styled.li<{ $active: boolean }>`
  cursor: pointer;
  padding: 2px 6px;

  font-weight: ${({ $active }) => ($active ? "bold" : undefined)};
  &:hover {
    opacity: 0.7;
  }
`;

const Container = styled.div`
  padding: 16px 48px 36px;
`;

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: opacity 0.15s ease-out;

  &:hover {
    opacity: 0.8;
  }
`;

const Games = styled.ul`
  display: flex;
  margin-top: 24px;
  gap: 20px 20px;
  flex-wrap: wrap;
`;

const Game = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 500px;
  height: 350px;
  flex: 0 0 auto;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  color: white;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 10px 3px;
`;

const ThumbnailContainer = styled.div`
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Thumbnail = styled.img`
  width: 100%;
`;

const GameInfo = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SeasonNumber = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const Title = styled.div`
  font-size: 24px;
  margin-top: 2px;
`;
const GameLinks = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`;
const GameLink = styled.a`
  text-decoration: underline;
  transition: opacity 0.15s ease-out;

  &:hover {
    opacity: 0.7;
  }
`;

const seasons = [1, 3, 4, 5, 6, 7, "all"];

export default function GamesPage() {
  const [currentSeason, setSeason] = useState<string | number>(7);
  const router = useRouter();
  const db = useSqlDB();
  const data = getAllGamesBySeason(db, {
    // @ts-ignore
    season: currentSeason === "all" ? null : currentSeason,
  });

  return (
    <Container>
      <SeasonSelectorLabel>season</SeasonSelectorLabel>

      <SeasonSelector>
        {seasons.map((season) => (
          <SeasonSelectorSeason
            $active={currentSeason === season}
            onClick={() => setSeason(season)}
            key={season}
          >
            {season}
          </SeasonSelectorSeason>
        ))}
      </SeasonSelector>

      <div>
        <Games>
          {data.map((game, index) => {
            return (
              <Game key={game.id} color={cardColors[game.season]}>
                <Card
                  onClick={() => {
                    router.push(`/games/${game.id}`);
                  }}
                >
                  <ThumbnailContainer>
                    <Thumbnail
                      alt="thumbnail"
                      src={getYouTubeThumbnailUrl(game.videoUrls[0].href)!}
                    />
                  </ThumbnailContainer>
                  <GameInfo>
                    <SeasonNumber>Season {game.season}</SeasonNumber>
                    <Title>Cardioless Kings vs {game.teamName}</Title>
                    <GameLinks>
                      Video Links:
                      {game.videoUrls
                        .sort()
                        .reverse()
                        .map((url: any) => (
                          <GameLink
                            key={url.href}
                            href={url.href}
                            target="_blank"
                            rel="noopener"
                            onClick={(ev: any) => {
                              ev.stopPropagation();
                            }}
                          >
                            {url.name}
                          </GameLink>
                        ))}
                    </GameLinks>
                  </GameInfo>
                </Card>
              </Game>
            );
          })}
        </Games>
      </div>
    </Container>
  );
}
