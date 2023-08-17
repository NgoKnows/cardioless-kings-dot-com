import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 14,
      reb: 1,
      ast: 6,
      stl: 0,
      blk: 2,
      fgm: 6,
      fga: 13,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 4,
      to: 3
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 19,
      reb: 3,
      ast: 5,
      stl: 0,
      blk: 0,
      fgm: 9,
      fga: 22,
      ftm: 0,
      fta: 0,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 7,
      reb: 1,
      ast: 1,
      stl: 0,
      blk: 2,
      fgm: 3,
      fga: 3,
      ftm: 1,
      fta: 5,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 9,
      reb: 11,
      ast: 4,
      stl: 3,
      blk: 1,
      fgm: 3,
      fga: 6,
      ftm: 3,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 15,
      reb: 8,
      ast: 1,
      stl: 0,
      blk: 1,
      fgm: 6,
      fga: 14,
      ftm: 2,
      fta: 2,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 13,
      reb: 3,
      ast: 6,
      stl: 2,
      blk: 1,
      fgm: 6,
      fga: 13,
      ftm: 0,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 22,
      reb: 4,
      ast: 6,
      stl: 2,
      blk: 0,
      fgm: 9,
      fga: 26,
      ftm: 2,
      fta: 6,
      tpm: 2,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 29,
      reb: 9,
      ast: 0,
      stl: 0,
      blk: 1,
      fgm: 12,
      fga: 34,
      ftm: 2,
      fta: 2,
      tpm: 3,
      tpa: 7,
      to: 2
    }
  }
];

  export default boxScore;

