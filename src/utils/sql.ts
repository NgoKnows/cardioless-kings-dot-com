import initSqlJs from "sql.js";
import type { Database } from "sql.js";
import games from "@/data/games";

export const initSqlDB = async () => {
  return initSqlJs({
    // Fetch sql.js wasm file from CDN
    // This way, we don't need to deal with webpack
    locateFile: (file) => `https://sql.js.org/dist/${file}`,
  });
};

export const setUpTables = (db: Database) => {
  db.run(`
  CREATE TABLE games (
    id TEXT PRIMARY KEY,
    season INT NOT NULL,
    team_name TEXT NOT NULL
  )
`);

  db.run(`
  CREATE TABLE game_links (
    game_id TEXT NOT NULL REFERENCES games(id),
    link TEXT NOT NULL,
    link_name TEXT,
    PRIMARY KEY (game_id, link)
  )
`);

  db.run(`
  CREATE TABLE players (
    id TEXT PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    nickname VARCHAR (255),
    height_inches INTEGER,
    weight_lbs INTEGER,
    status TEXT NOT NULL CHECK (status IN ('active', 'alternate', 'inactive'))
  )
`);

  db.run(`
    CREATE TABLE player_boxscore (
    player_id TEXT REFERENCES players(id),
    game_id TEXT REFERENCES games(id),
    pt INTEGER DEFAULT 0,
    reb INTEGER DEFAULT 0,
    ast INTEGER DEFAULT 0,
    stl INTEGER DEFAULT 0,
    blk INTEGER DEFAULT 0,
    fgm INTEGER DEFAULT 0,
    fga INTEGER DEFAULT 0,
    ftm INTEGER DEFAULT 0,
    fta INTEGER DEFAULT 0,
    tpm INTEGER DEFAULT 0,
    tpa INTEGER DEFAULT 0,
    "to" INTEGER DEFAULT 0,
    PRIMARY KEY(player_id, game_id)
  )
`);
};

export const importData = (db: Database) => {
  // import games
  console.log(`
  INSERT INTO games
  ( id, season, team_name )
  VALUES
    ${games.reduce((acc, game, index) => {
      return (
        acc +
        `(${game.id}, ${game.season}, ${game.teamName})` +
        (index === games.length - 1 ? "" : ", \n")
      );
    }, "")};
  `);

  const foo = db.prepare(`
  INSERT INTO games
  ( id, season, team_name )
  VALUES
    ${games.reduce((acc, game, index) => {
      return acc + `(?, ?, ?)` + (index === games.length - 1 ? "" : ", \n");
    }, "")};
  `);

  foo.run(games.flatMap((game) => [game.id, game.season, game.teamName]));
};
