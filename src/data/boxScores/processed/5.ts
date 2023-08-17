import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 24,
      reb: 9,
      ast: 4,
      stl: 1,
      blk: 2,
      fgm: 11,
      fga: 25,
      ftm: 0,
      fta: 0,
      tpm: 2,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 16,
      reb: 2,
      ast: 2,
      stl: 0,
      blk: 2,
      fgm: 6,
      fga: 10,
      ftm: 3,
      fta: 6,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 12,
      reb: 1,
      ast: 8,
      stl: 0,
      blk: 1,
      fgm: 3,
      fga: 6,
      ftm: 3,
      fta: 5,
      tpm: 3,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 11,
      reb: 1,
      ast: 6,
      stl: 3,
      blk: 1,
      fgm: 4,
      fga: 4,
      ftm: 2,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 10,
      reb: 4,
      ast: 0,
      stl: 1,
      blk: 1,
      fgm: 4,
      fga: 9,
      ftm: 0,
      fta: 4,
      tpm: 2,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 23,
      reb: 7,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 10,
      fga: 11,
      ftm: 2,
      fta: 7,
      tpm: 1,
      tpa: 1,
      to: 2
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 11,
      reb: 10,
      ast: 8,
      stl: 1,
      blk: 1,
      fgm: 5,
      fga: 13,
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
      pt: 21,
      reb: 3,
      ast: 6,
      stl: 1,
      blk: 0,
      fgm: 10,
      fga: 20,
      ftm: 1,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  }
];

  export default boxScore;

