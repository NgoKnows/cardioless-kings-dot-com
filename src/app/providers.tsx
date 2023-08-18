"use client";

import { useEffect, useState } from "react";
import StyledComponentsRegistry from "./registry";
import { SqlDBContext } from "@/context/sqlDb";
import { importData, initSqlDB, setUpTables } from "@/utils/sql";
import { ThemeProvider } from "styled-components";
import theme from "@/utils/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [db, setDB] = useState<any>();

  useEffect(() => {
    initSqlDB().then((db) => {
      const newDB = new db.Database();
      setDB(newDB);
      setUpTables(newDB);
      importData(newDB);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SqlDBContext.Provider value={db}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </SqlDBContext.Provider>
    </ThemeProvider>
  );
}
