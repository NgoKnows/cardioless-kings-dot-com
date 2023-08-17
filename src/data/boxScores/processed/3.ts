import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 24,
      reb: 4,
      ast: 7,
      stl: 3,
      blk: 2,
      fgm: 11,
      fga: 31,
      ftm: 0,
      fta: 2,
      tpm: 2,
      tpa: 3,
      to: 3
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
      fta: 2,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 12,
      reb: 2,
      ast: 3,
      stl: 3,
      blk: 0,
      fgm: 4,
      fga: 7,
      ftm: 3,
      fta: 6,
      tpm: 1,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 22,
      reb: 0,
      ast: 8,
      stl: 1,
      blk: 2,
      fgm: 10,
      fga: 13,
      ftm: 1,
      fta: 6,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 24,
      reb: 3,
      ast: 6,
      stl: 3,
      blk: 1,
      fgm: 10,
      fga: 22,
      ftm: 3,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 9,
      reb: 2,
      ast: 4,
      stl: 0,
      blk: 2,
      fgm: 4,
      fga: 11,
      ftm: 0,
      fta: 4,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 24,
      reb: 5,
      ast: 4,
      stl: 1,
      blk: 1,
      fgm: 10,
      fga: 22,
      ftm: 3,
      fta: 7,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 9,
      reb: 5,
      ast: 1,
      stl: 1,
      blk: 1,
      fgm: 3,
      fga: 7,
      ftm: 3,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  }
];

  export default boxScore;

