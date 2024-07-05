"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const colors = [
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

const Container = styled.div`
  display: flex;
  padding: 24px;
`;

const Slot = styled.div`
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 8px 12px 4px;
  position: relative;
  padding: 24px;
`;

const SlotTitle = styled.span`
  text-transform: uppercase;
  font-size: 16px;
`;

const SlotInfo = styled.div`
  width: 100%;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const RecordSlot = styled(Slot)`
  background-color: #a56da6;
  font-size: 48px;
  color: white;
  min-width: 350px;
  height: 140px;
  display: flex;
  flex-direction: column;
`;

const CurrentSeasonSlot = styled(Slot)`
  background-color: #b94933;
  font-size: 48px;
  color: white;
  min-width: 350px;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const NextGameSlot = styled(Slot)`
  background-color: #1c4835;
  color: white;
  margin-left: 24px;
  min-height: 350px;
  width: 800px;
  display: flex;
  flex-direction: column;
`;

const MostRecentGameSlot = styled(Slot)``;

export default function Home() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get("api/schedule").then((res) => res.data)
  );

  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <main>
      <Container>
        <div>
          <RecordSlot>
            <SlotTitle>Current Record</SlotTitle>
            <SlotInfo>5 - 1</SlotInfo>
          </RecordSlot>

          <CurrentSeasonSlot>
            <SlotTitle>Current Season</SlotTitle>
            <SlotInfo>8</SlotInfo>
          </CurrentSeasonSlot>
        </div>
        <NextGame data={data} />
      </Container>
    </main>
  );
}

const NextGameInfo = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NextGameInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextGameInfoSectionHeader = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid white;
  padding-bottom: 4px;
  font-weight: 300;
`;

const NextGameInfoSectionValue = styled.span`
  margin-top: 8px;
  font-size: 18px;
`;

const NextGameText = styled.div`
  font-size: 42px;
`;

const GameDataContainer = styled.div`
  padding-top: 36px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 36px; /* Adjust the gap as needed */
  margin-top: auto;
  margin-bottom: auto;
`;

const NextGameSelector = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
`;

const NextGameSelectorText = styled.div<{ active: boolean }>`
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-decoration: ${({ active }) => (active ? "underline" : undefined)};
`;

const NextGame = ({ data }: any) => {
  const [gameNumber, setGameNumber] = useState<1 | 2>(1);
  const gameStatus: "noData" | "oneGame" | "doubleHeader" = (() => {
    if (!data) {
      return "noData";
    }

    if (data.length === 2) {
      return "doubleHeader";
    }

    return "oneGame";
  })();

  const nextGameText = (() => {
    if (gameStatus === "noData") {
      return `Next game hasn't been posted yet. Stay tuned boys.`;
    }

    if (gameStatus === "oneGame") {
      return `Next game is tomorrow at ${data[0].time}.`;
    }

    return (
      <div>
        We have a game tomorrow at {data[0].time} & {data[1].time}.
      </div>
    );
  })();

  return (
    <NextGameSlot>
      <NextGameText>{nextGameText}</NextGameText>
      {console.log(data)}

      <GameDataContainer>
        {data.map((d, index) => {
          return <GameData key={index} currentGameData={d} />;
        })}
      </GameDataContainer>
    </NextGameSlot>
  );
};

const GameData = ({ currentGameData }: any) => {
  return (
    <>
      <NextGameInfoSection>
        <NextGameInfoSectionHeader>Time</NextGameInfoSectionHeader>
        <NextGameInfoSectionValue>
          {currentGameData.time}
        </NextGameInfoSectionValue>
      </NextGameInfoSection>
      <NextGameInfoSection>
        <NextGameInfoSectionHeader>Venue</NextGameInfoSectionHeader>
        <NextGameInfoSectionValue>
          {currentGameData.gym}
        </NextGameInfoSectionValue>
      </NextGameInfoSection>

      <NextGameInfoSection>
        <NextGameInfoSectionHeader>Opponent</NextGameInfoSectionHeader>
        <NextGameInfoSectionValue>
          {currentGameData.isHome
            ? currentGameData.awayTeam
            : currentGameData.homeTeam}
        </NextGameInfoSectionValue>
      </NextGameInfoSection>

      <NextGameInfoSection>
        <NextGameInfoSectionHeader>Officials</NextGameInfoSectionHeader>
        <NextGameInfoSectionValue>
          {currentGameData.officialOne} &{" "}
          <NextGameInfoSectionValue>
            {currentGameData.officialTwo}
          </NextGameInfoSectionValue>
        </NextGameInfoSectionValue>
      </NextGameInfoSection>
    </>
  );
};
