import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 26,
      reb: 10,
      ast: 0,
      stl: 3,
      blk: 2,
      fgm: 12,
      fga: 36,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 5,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 19,
      reb: 12,
      ast: 2,
      stl: 0,
      blk: 0,
      fgm: 8,
      fga: 9,
      ftm: 1,
      fta: 2,
      tpm: 2,
      tpa: 5,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 7,
      reb: 8,
      ast: 0,
      stl: 2,
      blk: 0,
      fgm: 3,
      fga: 3,
      ftm: 1,
      fta: 5,
      tpm: 0,
      tpa: 0,
      to: 0
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 20,
      reb: 10,
      ast: 5,
      stl: 3,
      blk: 2,
      fgm: 9,
      fga: 23,
      ftm: 1,
      fta: 3,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 9,
      reb: 0,
      ast: 8,
      stl: 3,
      blk: 0,
      fgm: 2,
      fga: 2,
      ftm: 3,
      fta: 4,
      tpm: 2,
      tpa: 5,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 6,
      reb: 10,
      ast: 7,
      stl: 2,
      blk: 1,
      fgm: 2,
      fga: 5,
      ftm: 1,
      fta: 1,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 12,
      reb: 4,
      ast: 2,
      stl: 3,
      blk: 1,
      fgm: 4,
      fga: 10,
      ftm: 3,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 2
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 18,
      reb: 1,
      ast: 1,
      stl: 3,
      blk: 2,
      fgm: 9,
      fga: 19,
      ftm: 0,
      fta: 0,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  }
];

  export default boxScore;

