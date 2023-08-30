"use client";

import { CURRENT_SEASON } from "@/constants/config";
import { useSqlDB } from "@/context/sqlDB";
import {
  getAllPlayers,
  getLeaderInAllStats,
  statsAndAverageNamesOrdered,
} from "@/utils/sql";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import PageHeader from "../../components/page-header";

const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 3em;
  grid-column-gap: 3em;
  width: 100%;
  margin-top: 24px;
`;

const Stat = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const StatHeader = styled.h3`
  padding: 6px 6px 6px 8px;
  background-color: #b2ac88;
  color: white;
  margin-bottom: 8px;
`;

const LeaderList = styled.ol`
  display: flex;
  flex-direction: column;
  padding-left: 4px;
`;

const Leader = styled.li<{ first: boolean }>`
  margin-bottom: 8px;
  font-weight: ${({ first }) => (first ? 800 : 400)};
`;

const LeaderLink = styled(Link)`
  display: flex;
  justify-content: space-between;
`;

const LeaderNumber = styled.span`
  margin-right: 6px;
`;

const LeaderName = styled.div``;

const StatValue = styled.div``;

export default function Players() {
  const db = useSqlDB();
  const [data] = useState(() => getLeaderInAllStats(db));
  console.log(data);

  return (
    <Container>
      <PageHeader season={CURRENT_SEASON}>Stats</PageHeader>
      <Stats>
        {statsAndAverageNamesOrdered.map(
          ({ statName, averageName, averageDisplayName }) => {
            return (
              <Stat key={statName}>
                <StatHeader>{averageDisplayName}</StatHeader>
                <LeaderList>
                  {/* @ts-ignore */}
                  {data[statName].map((datum, index) => {
                    return (
                      <Leader key={datum.name} first={index === 0}>
                        <LeaderLink href={`/players/${datum.id}`}>
                          <LeaderName>
                            <LeaderNumber>{index + 1}.</LeaderNumber>{" "}
                            {datum.name}
                          </LeaderName>
                          <StatValue>{datum[averageName].toFixed(1)}</StatValue>
                        </LeaderLink>
                      </Leader>
                    );
                  })}
                </LeaderList>
              </Stat>
            );
          }
        )}
      </Stats>
    </Container>
  );
}
