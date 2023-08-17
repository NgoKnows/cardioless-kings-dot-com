import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 16,
      reb: 11,
      ast: 0,
      stl: 2,
      blk: 2,
      fgm: 6,
      fga: 6,
      ftm: 3,
      fta: 7,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 25,
      reb: 0,
      ast: 8,
      stl: 3,
      blk: 0,
      fgm: 11,
      fga: 28,
      ftm: 1,
      fta: 1,
      tpm: 2,
      tpa: 6,
      to: 2
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 12,
      reb: 6,
      ast: 8,
      stl: 0,
      blk: 0,
      fgm: 6,
      fga: 12,
      ftm: 0,
      fta: 1,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 19,
      reb: 9,
      ast: 2,
      stl: 3,
      blk: 2,
      fgm: 8,
      fga: 21,
      ftm: 0,
      fta: 5,
      tpm: 3,
      tpa: 8,
      to: 1
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 10,
      reb: 1,
      ast: 0,
      stl: 2,
      blk: 1,
      fgm: 4,
      fga: 6,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 4,
      reb: 12,
      ast: 3,
      stl: 2,
      blk: 1,
      fgm: 1,
      fga: 3,
      ftm: 2,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 0
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 21,
      reb: 2,
      ast: 8,
      stl: 0,
      blk: 2,
      fgm: 10,
      fga: 29,
      ftm: 0,
      fta: 2,
      tpm: 1,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 21,
      reb: 5,
      ast: 0,
      stl: 2,
      blk: 2,
      fgm: 9,
      fga: 17,
      ftm: 2,
      fta: 7,
      tpm: 1,
      tpa: 1,
      to: 0
    }
  }
];

  export default boxScore;

