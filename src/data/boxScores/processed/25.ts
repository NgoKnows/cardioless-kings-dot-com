import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 8,
      reb: 6,
      ast: 6,
      stl: 0,
      blk: 2,
      fgm: 2,
      fga: 4,
      ftm: 2,
      fta: 3,
      tpm: 2,
      tpa: 4,
      to: 4
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 11,
      reb: 1,
      ast: 3,
      stl: 1,
      blk: 2,
      fgm: 3,
      fga: 9,
      ftm: 2,
      fta: 4,
      tpm: 3,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 24,
      reb: 0,
      ast: 8,
      stl: 2,
      blk: 2,
      fgm: 10,
      fga: 30,
      ftm: 2,
      fta: 3,
      tpm: 2,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 28,
      reb: 1,
      ast: 0,
      stl: 1,
      blk: 1,
      fgm: 11,
      fga: 15,
      ftm: 3,
      fta: 8,
      tpm: 3,
      tpa: 8,
      to: 2
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 13,
      reb: 9,
      ast: 3,
      stl: 3,
      blk: 2,
      fgm: 4,
      fga: 5,
      ftm: 2,
      fta: 3,
      tpm: 3,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 11,
      reb: 11,
      ast: 4,
      stl: 1,
      blk: 1,
      fgm: 3,
      fga: 6,
      ftm: 2,
      fta: 7,
      tpm: 3,
      tpa: 7,
      to: 2
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 21,
      reb: 4,
      ast: 1,
      stl: 2,
      blk: 2,
      fgm: 10,
      fga: 19,
      ftm: 1,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 21,
      reb: 5,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 9,
      fga: 24,
      ftm: 1,
      fta: 2,
      tpm: 2,
      tpa: 5,
      to: 0
    }
  }
];

  export default boxScore;

