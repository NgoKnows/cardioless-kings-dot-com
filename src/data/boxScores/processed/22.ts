import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 13,
      reb: 4,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 4,
      fga: 5,
      ftm: 2,
      fta: 2,
      tpm: 3,
      tpa: 4,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 9,
      reb: 4,
      ast: 7,
      stl: 2,
      blk: 1,
      fgm: 3,
      fga: 4,
      ftm: 2,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 8,
      reb: 3,
      ast: 8,
      stl: 1,
      blk: 2,
      fgm: 4,
      fga: 10,
      ftm: 0,
      fta: 1,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 29,
      reb: 1,
      ast: 0,
      stl: 0,
      blk: 1,
      fgm: 13,
      fga: 31,
      ftm: 0,
      fta: 5,
      tpm: 3,
      tpa: 6,
      to: 0
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 9,
      reb: 0,
      ast: 0,
      stl: 0,
      blk: 1,
      fgm: 3,
      fga: 5,
      ftm: 1,
      fta: 6,
      tpm: 2,
      tpa: 5,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 29,
      reb: 10,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 13,
      fga: 31,
      ftm: 0,
      fta: 5,
      tpm: 3,
      tpa: 6,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 11,
      reb: 12,
      ast: 1,
      stl: 1,
      blk: 1,
      fgm: 4,
      fga: 7,
      ftm: 1,
      fta: 1,
      tpm: 2,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 11,
      reb: 10,
      ast: 5,
      stl: 0,
      blk: 1,
      fgm: 4,
      fga: 8,
      ftm: 1,
      fta: 4,
      tpm: 2,
      tpa: 4,
      to: 4
    }
  }
];

  export default boxScore;

