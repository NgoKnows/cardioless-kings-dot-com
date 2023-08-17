import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 4,
      reb: 12,
      ast: 0,
      stl: 3,
      blk: 2,
      fgm: 1,
      fga: 1,
      ftm: 2,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 0
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 14,
      reb: 7,
      ast: 8,
      stl: 0,
      blk: 0,
      fgm: 6,
      fga: 6,
      ftm: 2,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 26,
      reb: 5,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 11,
      fga: 22,
      ftm: 1,
      fta: 6,
      tpm: 3,
      tpa: 6,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 18,
      reb: 2,
      ast: 1,
      stl: 1,
      blk: 2,
      fgm: 8,
      fga: 14,
      ftm: 1,
      fta: 2,
      tpm: 1,
      tpa: 1,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 13,
      reb: 4,
      ast: 7,
      stl: 0,
      blk: 1,
      fgm: 4,
      fga: 4,
      ftm: 3,
      fta: 3,
      tpm: 2,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 14,
      reb: 1,
      ast: 7,
      stl: 1,
      blk: 2,
      fgm: 6,
      fga: 11,
      ftm: 0,
      fta: 0,
      tpm: 2,
      tpa: 4,
      to: 2
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 19,
      reb: 7,
      ast: 1,
      stl: 3,
      blk: 2,
      fgm: 9,
      fga: 18,
      ftm: 1,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 12,
      reb: 2,
      ast: 2,
      stl: 2,
      blk: 1,
      fgm: 5,
      fga: 12,
      ftm: 1,
      fta: 2,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  }
];

  export default boxScore;

