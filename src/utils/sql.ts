import initSqlJs from "sql.js";

export const initSqlDB = () =>
  initSqlJs({
    // Fetch sql.js wasm file from CDN
    // This way, we don't need to deal with webpack
    locateFile: (file) => `https://sql.js.org/dist/${file}`,
  });
