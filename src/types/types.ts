export interface ProcessedPlayerData {
  player: number;
  stats: PlayerStats;
}

export interface PlayerStats {
  pt: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  fgm: number;
  fga: number;
  ftm: number;
  fta: number;
  tpm: number;
  tpa: number;
  to: number;
}
