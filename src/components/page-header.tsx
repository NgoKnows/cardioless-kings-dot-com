"use client";

import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Season = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export default function PageHeader({
  season,
  children,
}: {
  season: number | string;
  children: ReactNode;
}) {
  return (
    <Container>
      <Season>Season {season}</Season>
      <Title>{children}</Title>
    </Container>
  );
}
