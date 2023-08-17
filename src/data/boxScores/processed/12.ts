import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 20,
      reb: 3,
      ast: 6,
      stl: 1,
      blk: 1,
      fgm: 9,
      fga: 24,
      ftm: 1,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 2,
      reb: 0,
      ast: 8,
      stl: 0,
      blk: 2,
      fgm: 1,
      fga: 3,
      ftm: 0,
      fta: 2,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 21,
      reb: 3,
      ast: 1,
      stl: 0,
      blk: 2,
      fgm: 10,
      fga: 19,
      ftm: 1,
      fta: 2,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 21,
      reb: 6,
      ast: 1,
      stl: 1,
      blk: 2,
      fgm: 9,
      fga: 23,
      ftm: 3,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 0
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 16,
      reb: 9,
      ast: 6,
      stl: 3,
      blk: 0,
      fgm: 7,
      fga: 14,
      ftm: 2,
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
      reb: 6,
      ast: 5,
      stl: 1,
      blk: 1,
      fgm: 7,
      fga: 11,
      ftm: 3,
      fta: 6,
      tpm: 3,
      tpa: 9,
      to: 5
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 23,
      reb: 2,
      ast: 6,
      stl: 1,
      blk: 1,
      fgm: 10,
      fga: 18,
      ftm: 1,
      fta: 3,
      tpm: 2,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 17,
      reb: 9,
      ast: 6,
      stl: 0,
      blk: 1,
      fgm: 7,
      fga: 10,
      ftm: 1,
      fta: 2,
      tpm: 2,
      tpa: 2,
      to: 4
    }
  }
];

  export default boxScore;

