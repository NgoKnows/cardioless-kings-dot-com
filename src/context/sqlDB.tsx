import React, { createContext, useContext, ReactNode } from "react";
import { Database } from "sql.js";

// Define the context shape
type SqlDBContextType = any;

export const SqlDBContext = createContext<SqlDBContextType | undefined>(
  undefined
);

// Custom hook to use the context
export function useSqlDB(): Database {
  const context = useContext(SqlDBContext);
  if (!context) {
    throw new Error("useSqlDB must be used within a SqlDBContextProvider");
  }

  return context;
}
