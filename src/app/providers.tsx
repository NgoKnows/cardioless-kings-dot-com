"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import StyledComponentsRegistry from "./registry";
import { SqlDBContext } from "@/context/sqlDB";
import { importData, initSqlDB, setUpTables } from "@/utils/sql";
import { ThemeProvider } from "styled-components";
import theme from "@/utils/theme";

const queryClient = new QueryClient();

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

  if (!db) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SqlDBContext.Provider value={db}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </SqlDBContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
