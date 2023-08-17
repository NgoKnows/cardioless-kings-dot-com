import initSqlJs from "sql.js";
import type { Database } from "sql.js";
import games from "@/data/games";
import players from "@/data/players";
import { gameIdToBoxScore } from "@/data/boxScores/processed";

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
    CREATE TABLE player_box_scores (
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
  const populateGamesStmt = db.prepare(`
  INSERT INTO games
  ( id, season, team_name )
  VALUES
    ${games.reduce((acc, game, index) => {
      return acc + `(?, ?, ?)` + (index === games.length - 1 ? "" : ", \n");
    }, "")};
  `);

  populateGamesStmt.run(
    games.flatMap((game) => [game.id, game.season, game.teamName])
  );

  const allVideoUrls = games.flatMap((game) =>
    game.videoUrls.map((link) => ({
      gameId: game.id,
      link: link.href,
      linkName: link.name,
    }))
  );

  const populateGameLinksStmt = db.prepare(`
  INSERT INTO game_links
  ( game_id, link, link_name )
  VALUES
    ${allVideoUrls.reduce((acc, url, index) => {
      return (
        acc + `(?, ?, ?)` + (index === allVideoUrls.length - 1 ? "" : ", \n")
      );
    }, "")};
  `);

  populateGameLinksStmt.run(
    allVideoUrls.flatMap((url) => [url.gameId, url.link, url.linkName])
  );

  // console.log(
  //   db.exec(
  //     //"SELECT * from games join game_links ON games.id=game_links.game_id;"
  //     `SELECT
  //     games.*,
  //     GROUP_CONCAT(game_links.link_name) AS combined_link_names,
  //     GROUP_CONCAT(game_links.link) AS combined_links
  // FROM
  //     games
  // JOIN
  //     game_links
  // ON
  //     games.id = game_links.game_id
  // GROUP BY
  //     games.id;`
  //   )
  // );

  const allPlayers = Object.values(players);
  const populatePlayersStmt = db.prepare(`
  INSERT INTO players
  ( id, name, status )
  VALUES
    ${allPlayers.reduce((acc, game, index) => {
      return (
        acc + `(?, ?, ?)` + (index === allPlayers.length - 1 ? "" : ", \n")
      );
    }, "")};
  `);

  populatePlayersStmt.run(
    allPlayers.flatMap((player) => [player.id, player.name, player.status])
  );

  const stats = [
    "pt",
    "reb",
    "ast",
    "stl",
    "blk",
    "fgm",
    "fga",
    "ftm",
    "fta",
    "tpm",
    "tpa",
    "to",
  ];

  const gameIdToBoxScoreEntries = Object.entries(gameIdToBoxScore);

  gameIdToBoxScoreEntries.forEach(([gameId, boxScore]) => {
    const populatePlayerBoxScoresStmt = db.prepare(`
  INSERT INTO player_box_scores
  (
    player_id,
    game_id,
    pt,
    reb,
    ast,
    stl,
    blk,
    fgm,
    fga,
    ftm,
    fta,
    tpm,
    tpa,
    "to"
  )
  VALUES
    ${boxScore.reduce((acc, game, index) => {
      return (
        acc +
        `(?, ?, ${stats.map(() => "?").join(", ")})` +
        (index === boxScore.length - 1 ? "" : ", \n")
      );
    }, "")};
  `);

    populatePlayerBoxScoresStmt.run(
      boxScore.flatMap((boxScore) => [
        boxScore.player,
        gameId,
        // @ts-expect-error
        ...stats.map((statName) => boxScore.stats[statName]),
      ])
    );
  });

  console.log(
    db.exec(`
      SELECT players.*, avg(player_box_scores.pt) as ppg
      FROM players
      join player_box_scores on player_box_scores.player_id=players.id
      where players.id = ${players.Alex.id};
    `)
  );
};
