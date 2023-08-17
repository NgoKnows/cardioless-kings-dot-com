import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 27,
      reb: 6,
      ast: 1,
      stl: 3,
      blk: 2,
      fgm: 12,
      fga: 33,
      ftm: 0,
      fta: 5,
      tpm: 3,
      tpa: 6,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 13,
      reb: 9,
      ast: 5,
      stl: 2,
      blk: 2,
      fgm: 5,
      fga: 9,
      ftm: 0,
      fta: 4,
      tpm: 3,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 3,
      reb: 2,
      ast: 7,
      stl: 0,
      blk: 1,
      fgm: 1,
      fga: 2,
      ftm: 1,
      fta: 2,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 21,
      reb: 4,
      ast: 8,
      stl: 0,
      blk: 1,
      fgm: 8,
      fga: 13,
      ftm: 2,
      fta: 2,
      tpm: 3,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 8,
      reb: 4,
      ast: 2,
      stl: 3,
      blk: 1,
      fgm: 4,
      fga: 8,
      ftm: 0,
      fta: 0,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 15,
      reb: 5,
      ast: 2,
      stl: 3,
      blk: 0,
      fgm: 6,
      fga: 12,
      ftm: 2,
      fta: 2,
      tpm: 1,
      tpa: 1,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 26,
      reb: 6,
      ast: 4,
      stl: 0,
      blk: 2,
      fgm: 11,
      fga: 25,
      ftm: 2,
      fta: 4,
      tpm: 2,
      tpa: 6,
      to: 3
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 9,
      reb: 12,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 3,
      fga: 6,
      ftm: 2,
      fta: 6,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  }
];

  export default boxScore;

