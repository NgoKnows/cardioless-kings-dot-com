import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 22,
      reb: 1,
      ast: 2,
      stl: 1,
      blk: 0,
      fgm: 9,
      fga: 10,
      ftm: 2,
      fta: 5,
      tpm: 2,
      tpa: 4,
      to: 2
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 4,
      reb: 5,
      ast: 3,
      stl: 1,
      blk: 1,
      fgm: 1,
      fga: 2,
      ftm: 2,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 7,
      reb: 0,
      ast: 5,
      stl: 3,
      blk: 0,
      fgm: 2,
      fga: 3,
      ftm: 2,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 8,
      reb: 5,
      ast: 4,
      stl: 0,
      blk: 2,
      fgm: 4,
      fga: 6,
      ftm: 0,
      fta: 0,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 21,
      reb: 1,
      ast: 3,
      stl: 0,
      blk: 1,
      fgm: 9,
      fga: 14,
      ftm: 0,
      fta: 2,
      tpm: 3,
      tpa: 8,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 11,
      reb: 10,
      ast: 2,
      stl: 2,
      blk: 1,
      fgm: 4,
      fga: 7,
      ftm: 0,
      fta: 2,
      tpm: 3,
      tpa: 9,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 23,
      reb: 7,
      ast: 2,
      stl: 0,
      blk: 0,
      fgm: 11,
      fga: 22,
      ftm: 0,
      fta: 2,
      tpm: 1,
      tpa: 1,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 30,
      reb: 5,
      ast: 4,
      stl: 3,
      blk: 0,
      fgm: 12,
      fga: 28,
      ftm: 3,
      fta: 5,
      tpm: 3,
      tpa: 6,
      to: 1
    }
  }
];

  export default boxScore;

