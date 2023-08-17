import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 26,
      reb: 4,
      ast: 3,
      stl: 3,
      blk: 0,
      fgm: 11,
      fga: 24,
      ftm: 3,
      fta: 4,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 21,
      reb: 3,
      ast: 4,
      stl: 1,
      blk: 1,
      fgm: 8,
      fga: 15,
      ftm: 3,
      fta: 4,
      tpm: 2,
      tpa: 6,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 13,
      reb: 8,
      ast: 1,
      stl: 1,
      blk: 0,
      fgm: 6,
      fga: 16,
      ftm: 1,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 6,
      reb: 5,
      ast: 3,
      stl: 3,
      blk: 0,
      fgm: 1,
      fga: 1,
      ftm: 3,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 10,
      reb: 3,
      ast: 8,
      stl: 3,
      blk: 0,
      fgm: 4,
      fga: 5,
      ftm: 1,
      fta: 4,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 29,
      reb: 12,
      ast: 3,
      stl: 0,
      blk: 0,
      fgm: 12,
      fga: 17,
      ftm: 3,
      fta: 8,
      tpm: 2,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 27,
      reb: 7,
      ast: 1,
      stl: 2,
      blk: 1,
      fgm: 12,
      fga: 22,
      ftm: 1,
      fta: 1,
      tpm: 2,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 17,
      reb: 9,
      ast: 4,
      stl: 1,
      blk: 1,
      fgm: 7,
      fga: 8,
      ftm: 0,
      fta: 0,
      tpm: 3,
      tpa: 6,
      to: 5
    }
  }
];

  export default boxScore;

