import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 27,
      reb: 1,
      ast: 3,
      stl: 0,
      blk: 0,
      fgm: 11,
      fga: 26,
      ftm: 3,
      fta: 4,
      tpm: 2,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 32,
      reb: 12,
      ast: 4,
      stl: 1,
      blk: 0,
      fgm: 13,
      fga: 14,
      ftm: 3,
      fta: 3,
      tpm: 3,
      tpa: 4,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 21,
      reb: 7,
      ast: 8,
      stl: 2,
      blk: 1,
      fgm: 9,
      fga: 23,
      ftm: 2,
      fta: 6,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 7,
      reb: 8,
      ast: 2,
      stl: 2,
      blk: 2,
      fgm: 3,
      fga: 5,
      ftm: 0,
      fta: 3,
      tpm: 1,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 8,
      reb: 8,
      ast: 4,
      stl: 2,
      blk: 1,
      fgm: 3,
      fga: 3,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 6,
      to: 0
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 7,
      reb: 10,
      ast: 0,
      stl: 0,
      blk: 2,
      fgm: 2,
      fga: 6,
      ftm: 3,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 6,
      reb: 3,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 2,
      fga: 3,
      ftm: 2,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 25,
      reb: 10,
      ast: 1,
      stl: 0,
      blk: 0,
      fgm: 11,
      fga: 22,
      ftm: 1,
      fta: 4,
      tpm: 2,
      tpa: 3,
      to: 0
    }
  }
];

  export default boxScore;

