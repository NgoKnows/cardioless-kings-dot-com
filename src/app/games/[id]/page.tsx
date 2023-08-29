"use client";

import { useSqlDB } from "@/context/sqlDB";
import { getBoxScoreForGame, getGameDetails } from "@/utils/sql";
import { useState } from "react";
import styled from "styled-components";
import Table from "./table";

const Container = styled.div`
  padding: 36px;
`;

const Season = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const TableContainer = styled.div`
  margin-top: 28px;
`;

export default function Page({ params }: { params: { id: string } }) {
  const db = useSqlDB();
  const [data] = useState(() => getBoxScoreForGame(db, { gameId: params.id }));
  const [game] = useState(() => getGameDetails(db, { gameId: params.id }));
  return (
    <Container>
      <Season>Season {game.season}</Season>
      <Title>Cardioless Kings vs {game.teamName}</Title>
      <TableContainer>
        <Table data={data} />
      </TableContainer>
    </Container>
  );
}
