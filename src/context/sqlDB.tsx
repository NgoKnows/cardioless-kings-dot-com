import React, { createContext, useContext, ReactNode } from "react";

// Define the context shape
type SqlDBContextType = any;

export const SqlDBContext = createContext<SqlDBContextType | undefined>(
  undefined
);

// Custom hook to use the context
export function useSqlDBContext() {
  const context = useContext(SqlDBContext);
  if (!context) {
    throw new Error(
      "useSqlDBContext must be used within a SqlDBContextProvider"
    );
  }

  return context;
}
