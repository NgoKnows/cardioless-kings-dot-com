import fs from "fs";
import path from "path";
import games from "../data/games";
import players, { Status } from "../data/players";
import random from "lodash/random";

const statNames = [
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

const outputFolder = "src/data/boxScores/raw";

function writeMockBoxScoreToFile(outputFilePath: string): void {
  const mockBoxScore = generateMockBoxScore();
  const fileContent = `player,${statNames.join(",")}
${mockBoxScore
  .map(
    (playerBoxScore) =>
      `${playerBoxScore.player},${statNames
        .map(
          // @ts-expect-error
          (statName) => playerBoxScore[statName]
        )
        .join(",")}`
  )
  .join("\n")}
`;

  fs.writeFileSync(outputFilePath, fileContent);
}

const generateMockBoxScore = () => {
  return Object.entries(players)
    .filter(([__, player]) => player.status === Status.Active)
    .map(([name, player]) => {
      const tpm = random(0, 3);
      const tpa = random(tpm, tpm * 3);
      const ftm = random(0, 3);
      const fta = random(ftm, ftm + 5);
      const fgm = random(tpm, tpm + 10);
      const fga = random(fgm, Math.round(fgm * 3));
      const pt = tpm * 3 + ftm + (fgm - tpm) * 2;

      return {
        player: name,
        pt,
        reb: random(0, 12),
        ast: random(0, 8),
        stl: random(0, 3),
        blk: random(0, 2),
        fgm,
        fga,
        ftm,
        fta,
        tpm,
        tpa,
        to: random(0, 5),
      };
    });
};

games.forEach((game) => {
  const gameId = game.id;

  writeMockBoxScoreToFile(`${outputFolder}/${gameId}.csv`);
});
