"use client";

import data from "@/data/dataScript";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeaderComp = styled.header`
  background-color: palevioletred;
  padding: 24px;
`;

const LinkContainer = styled.div`
  display: inline-flex;
  margin-left: 36px;
  > * + * {
    margin-left: 12px;
  }
`;

export default function Header() {
  console.log(data);
  return (
    <HeaderComp>
      <Link href="/">Cardioless Kings</Link>
      <LinkContainer>
        <Link href="/games">games</Link>
        <Link href="/stats">stats</Link>
        <Link href="/stats">players</Link>
      </LinkContainer>
    </HeaderComp>
  );
}
