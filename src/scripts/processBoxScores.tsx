const fs = require("fs");
const path = require("path");

interface ProcessedPlayerData {
  player: string;
  stats: PlayerStats;
}

interface PlayerStats {
  [key: string]: number;
}

function convertCSVtoJSON(csvFilePath: string): ProcessedPlayerData[] {
  const csvData = fs.readFileSync(csvFilePath, "utf8");
  const lines = csvData.trim().split("\n");
  const header = lines.shift()!.split(",");
  const playerData: ProcessedPlayerData[] = [];

  for (const line of lines) {
    const values = line.split(",");
    const playerStats: PlayerStats = {};

    for (let i = 1; i < header.length; i++) {
      playerStats[header[i].trim()] = parseFloat(values[i]);
    }

    const playerEntry: ProcessedPlayerData = {
      player: values[0],
      stats: playerStats,
    };

    playerData.push(playerEntry);
  }

  return playerData;
}

// Regular expression to match strings surrounded by double quotes
const regex = /"([^"]*)"/g;

function writeJSONToFile(
  outputFilePath: string,
  jsonData: ProcessedPlayerData[]
): void {
  const formattedData = jsonData.map((entry) => ({
    player: `players.${entry.player}.id`,
    stats: entry.stats,
  }));

  const fileContent = `import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = ${JSON.stringify(
    formattedData,
    null,
    2
  ).replace(regex, "$1")};

  export default boxScore;

`;

  fs.writeFileSync(outputFilePath, fileContent);
}

const writeBoxScoreIndexFile = (fileNames: string[]) => {
  const fileContent = `${fileNames
    .map((fileName) => `import game${fileName}BoxScore from "./${fileName}";`)
    .join("\n")}

export const gameIdToBoxScore = {
  ${fileNames
    .map((fileName) => `${fileName}: game${fileName}BoxScore`)
    .join(",\n  ")}
};
`;

  fs.writeFileSync(`${outputFolder}/index.ts`, fileContent);
};

const rawFolder = "src/data/boxScores/raw";
const outputFolder = "src/data/boxScores/processed";

const allFileNames: string[] = [];
fs.readdirSync(rawFolder).forEach((file: string) => {
  if (file.endsWith(".csv")) {
    const fileName = file.split(".")[0];
    allFileNames.push(fileName);
    const csvFilePath = path.join(rawFolder, file);
    const jsonData = convertCSVtoJSON(csvFilePath);
    writeJSONToFile(`${outputFolder}/${fileName}.ts`, jsonData);
    console.log(`Processed ${csvFilePath}`);
  }

  writeBoxScoreIndexFile(allFileNames);
});
