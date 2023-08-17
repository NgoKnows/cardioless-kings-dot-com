import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 19,
      reb: 1,
      ast: 7,
      stl: 1,
      blk: 0,
      fgm: 9,
      fga: 10,
      ftm: 0,
      fta: 1,
      tpm: 1,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 14,
      reb: 2,
      ast: 0,
      stl: 2,
      blk: 1,
      fgm: 6,
      fga: 11,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 2,
      to: 2
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 10,
      reb: 0,
      ast: 3,
      stl: 1,
      blk: 2,
      fgm: 3,
      fga: 9,
      ftm: 1,
      fta: 3,
      tpm: 3,
      tpa: 9,
      to: 0
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 11,
      reb: 7,
      ast: 0,
      stl: 3,
      blk: 0,
      fgm: 4,
      fga: 9,
      ftm: 0,
      fta: 1,
      tpm: 3,
      tpa: 6,
      to: 1
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 26,
      reb: 11,
      ast: 1,
      stl: 1,
      blk: 0,
      fgm: 11,
      fga: 12,
      ftm: 2,
      fta: 2,
      tpm: 2,
      tpa: 2,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 8,
      reb: 5,
      ast: 1,
      stl: 3,
      blk: 1,
      fgm: 3,
      fga: 4,
      ftm: 0,
      fta: 2,
      tpm: 2,
      tpa: 4,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 23,
      reb: 5,
      ast: 3,
      stl: 0,
      blk: 0,
      fgm: 10,
      fga: 21,
      ftm: 2,
      fta: 2,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 23,
      reb: 12,
      ast: 3,
      stl: 3,
      blk: 0,
      fgm: 10,
      fga: 21,
      ftm: 0,
      fta: 0,
      tpm: 3,
      tpa: 7,
      to: 4
    }
  }
];

  export default boxScore;

