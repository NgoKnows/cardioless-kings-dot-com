"use client";

import { SqlDBContext } from "@/context/sqlDb";
import data from "@/data/dataScript";
import { initSqlDB } from "@/utils/sql";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [db, setDB] = useState<any>();

  useEffect(() => {
    initSqlDB().then((db) => {
      setDB(db);
    });
  }, []);

  return (
    <SqlDBContext.Provider value={db}>
      <HeaderComp>
        <Link href="/">Cardioless Kings</Link>
        <LinkContainer>
          <Link href="/games">games</Link>
          <Link href="/stats">stats</Link>
          <Link href="/players">players</Link>
        </LinkContainer>
      </HeaderComp>
    </SqlDBContext.Provider>
  );
}
