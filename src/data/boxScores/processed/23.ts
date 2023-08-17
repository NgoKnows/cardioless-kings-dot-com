import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 24,
      reb: 6,
      ast: 4,
      stl: 0,
      blk: 1,
      fgm: 10,
      fga: 19,
      ftm: 1,
      fta: 6,
      tpm: 3,
      tpa: 4,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 28,
      reb: 8,
      ast: 4,
      stl: 3,
      blk: 0,
      fgm: 12,
      fga: 26,
      ftm: 1,
      fta: 3,
      tpm: 3,
      tpa: 6,
      to: 2
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 23,
      reb: 5,
      ast: 1,
      stl: 0,
      blk: 1,
      fgm: 9,
      fga: 19,
      ftm: 2,
      fta: 4,
      tpm: 3,
      tpa: 5,
      to: 5
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 17,
      reb: 11,
      ast: 7,
      stl: 1,
      blk: 1,
      fgm: 8,
      fga: 16,
      ftm: 1,
      fta: 2,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 21,
      reb: 8,
      ast: 6,
      stl: 3,
      blk: 2,
      fgm: 9,
      fga: 11,
      ftm: 3,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 3
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 32,
      reb: 0,
      ast: 1,
      stl: 0,
      blk: 2,
      fgm: 13,
      fga: 38,
      ftm: 3,
      fta: 5,
      tpm: 3,
      tpa: 7,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 26,
      reb: 7,
      ast: 1,
      stl: 3,
      blk: 2,
      fgm: 11,
      fga: 25,
      ftm: 1,
      fta: 4,
      tpm: 3,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 7,
      reb: 9,
      ast: 2,
      stl: 2,
      blk: 2,
      fgm: 2,
      fga: 4,
      ftm: 2,
      fta: 5,
      tpm: 1,
      tpa: 2,
      to: 2
    }
  }
];

  export default boxScore;

