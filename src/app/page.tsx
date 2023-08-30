"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
  padding: 16px;
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

const NextGameSlot = styled(Slot)`
  background-color: #1c4835;
  color: white;
  margin-left: 24px;
  height: 400px;
  width: 800px;
`;

const MostRecentGameSlot = styled(Slot)``;

const NextGameText = styled.div`
  font-size: 42px;
`;

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
        <RecordSlot>
          <SlotTitle>Current Record</SlotTitle>
          <SlotInfo>8-1</SlotInfo>
        </RecordSlot>
        <NextGameSlot>
          <NextGameText>
            Next game is tomorrow at {data[0].time}.
            <br />
            We are home, so wear black.
            <br />
            Officials are foo and bar
          </NextGameText>
        </NextGameSlot>
      </Container>
    </main>
  );
}
