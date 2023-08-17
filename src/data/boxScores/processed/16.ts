import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 10,
      reb: 8,
      ast: 6,
      stl: 3,
      blk: 1,
      fgm: 4,
      fga: 6,
      ftm: 2,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 0
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 22,
      reb: 0,
      ast: 1,
      stl: 2,
      blk: 0,
      fgm: 10,
      fga: 30,
      ftm: 0,
      fta: 0,
      tpm: 2,
      tpa: 5,
      to: 3
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 27,
      reb: 7,
      ast: 6,
      stl: 0,
      blk: 1,
      fgm: 12,
      fga: 18,
      ftm: 0,
      fta: 3,
      tpm: 3,
      tpa: 7,
      to: 2
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 26,
      reb: 5,
      ast: 5,
      stl: 3,
      blk: 1,
      fgm: 11,
      fga: 12,
      ftm: 3,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 5,
      reb: 1,
      ast: 8,
      stl: 1,
      blk: 1,
      fgm: 1,
      fga: 1,
      ftm: 3,
      fta: 5,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 20,
      reb: 1,
      ast: 6,
      stl: 1,
      blk: 0,
      fgm: 8,
      fga: 8,
      ftm: 1,
      fta: 1,
      tpm: 3,
      tpa: 6,
      to: 4
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 23,
      reb: 12,
      ast: 0,
      stl: 2,
      blk: 2,
      fgm: 11,
      fga: 21,
      ftm: 0,
      fta: 5,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 11,
      reb: 2,
      ast: 3,
      stl: 3,
      blk: 2,
      fgm: 5,
      fga: 8,
      ftm: 0,
      fta: 5,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  }
];

  export default boxScore;

