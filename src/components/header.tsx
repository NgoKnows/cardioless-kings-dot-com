"use client";

import { SqlDBContext } from "@/context/sqlDb";
import data from "@/data/dataScript";
import { initSqlDB } from "@/utils/sql";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderComp = styled.div`
  background-color: #b2ac88;
  padding: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 8px 12px 4px;
  color: white;
`;

const LinkContainer = styled.div`
  display: inline-flex;
  margin-left: 72px;
  > * + * {
    margin-left: 12px;
  }
`;

const HomeLink = styled(Link)`
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 3px;
`;

export default function Header() {
  const [db, setDB] = useState<any>();

  useEffect(() => {
    initSqlDB().then((db) => {
      setDB(db);
    });
  }, []);

  return (
    <SqlDBContext.Provider value={db}>
      <HeaderComp>
        <HomeLink href="/">Cardioless Kings</HomeLink>
        <LinkContainer>
          <Link href="/games">games</Link>
          <Link href="/stats">stats</Link>
          <Link href="/players">players</Link>
        </LinkContainer>
      </HeaderComp>
    </SqlDBContext.Provider>
  );
}
