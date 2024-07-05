"use client";

import { useSqlDB } from "@/context/sqlDB";
import { getAllPlayers } from "@/utils/sql";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import lbj from "@/img/lbj.png";

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

console.log(lbj);

const Container = styled.div`
  padding: 24px;
`;

const PlayerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  width: 100%;
  align-items: center;
`;

const PlayerCard = styled(Link)`
  height: 700px;
  width: 600px;
  background-color: ${({ color }) => color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 10px 3px;
`;

const PlayerImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
  margin-bottom: 16px;
`;

const PlayerImage = styled(Image)``;

const PlayerStats = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: white;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-playfair-display);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 10px 3px;
`;

const StatLine = styled.span`
  background-color: rgba(51, 51, 51, 0.6);
  padding: 4px 16px;
  flex-grow: 0;
  align-self: flex-start;

  &:first-child {
    padding: 8px 16px 4px;
  }

  &:last-child {
    padding: 4px 16px 8px;
  }
`;

const Name = styled.p`
  position: absolute;
  top: 50px;
  left: 50px;
  color: white;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 600;
`;

export default function Players() {
  const db = useSqlDB();
  const [data] = useState(() => getAllPlayers(db));

  return (
    <Container>
      <PlayerCards>
        {data.map((player, index) => {
          return (
            <PlayerCard
              href={`/players/${player.id}`}
              key={player.id}
              color={cardColors[index]}
            >
              <Name>
                {player.name.split(" ").map((name) => (
                  <>
                    {name}
                    <br />
                  </>
                ))}
              </Name>
              <PlayerImageContainer>
                <PlayerImage
                  alt=""
                  {...lbj}
                  width={397 * 0.7}
                  height={865 * 0.7}
                  // layout="fill"
                  // objectFit="contain"
                />
              </PlayerImageContainer>
              <PlayerStats>
                <StatLine>Points: {player.ppg}</StatLine>
                <StatLine>Rebounds: {player.rpg}</StatLine>
                <StatLine>Assists: {player.apg}</StatLine>
              </PlayerStats>
            </PlayerCard>
          );
        })}
      </PlayerCards>
    </Container>
  );
}
