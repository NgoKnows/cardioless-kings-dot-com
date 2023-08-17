import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 13,
      reb: 4,
      ast: 8,
      stl: 2,
      blk: 0,
      fgm: 4,
      fga: 8,
      ftm: 2,
      fta: 2,
      tpm: 3,
      tpa: 4,
      to: 0
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 3,
      reb: 0,
      ast: 6,
      stl: 1,
      blk: 2,
      fgm: 1,
      fga: 2,
      ftm: 0,
      fta: 0,
      tpm: 1,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 8,
      reb: 5,
      ast: 3,
      stl: 0,
      blk: 1,
      fgm: 3,
      fga: 3,
      ftm: 1,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 2
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 8,
      reb: 12,
      ast: 8,
      stl: 0,
      blk: 2,
      fgm: 3,
      fga: 3,
      ftm: 1,
      fta: 6,
      tpm: 1,
      tpa: 1,
      to: 5
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 25,
      reb: 1,
      ast: 8,
      stl: 0,
      blk: 2,
      fgm: 11,
      fga: 12,
      ftm: 1,
      fta: 2,
      tpm: 2,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 9,
      reb: 2,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 4,
      fga: 5,
      ftm: 0,
      fta: 1,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 12,
      reb: 8,
      ast: 3,
      stl: 1,
      blk: 0,
      fgm: 5,
      fga: 12,
      ftm: 1,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 22,
      reb: 9,
      ast: 5,
      stl: 0,
      blk: 1,
      fgm: 10,
      fga: 23,
      ftm: 1,
      fta: 2,
      tpm: 1,
      tpa: 3,
      to: 1
    }
  }
];

  export default boxScore;

