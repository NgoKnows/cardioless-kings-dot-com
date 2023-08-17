import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 20,
      reb: 11,
      ast: 7,
      stl: 0,
      blk: 1,
      fgm: 7,
      fga: 16,
      ftm: 3,
      fta: 5,
      tpm: 3,
      tpa: 6,
      to: 4
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 5,
      reb: 5,
      ast: 4,
      stl: 3,
      blk: 0,
      fgm: 2,
      fga: 5,
      ftm: 0,
      fta: 5,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 13,
      reb: 3,
      ast: 4,
      stl: 1,
      blk: 2,
      fgm: 4,
      fga: 12,
      ftm: 3,
      fta: 8,
      tpm: 2,
      tpa: 3,
      to: 2
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 10,
      reb: 3,
      ast: 3,
      stl: 2,
      blk: 1,
      fgm: 3,
      fga: 7,
      ftm: 2,
      fta: 2,
      tpm: 2,
      tpa: 6,
      to: 2
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 24,
      reb: 10,
      ast: 1,
      stl: 2,
      blk: 1,
      fgm: 11,
      fga: 31,
      ftm: 1,
      fta: 3,
      tpm: 1,
      tpa: 1,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 17,
      reb: 9,
      ast: 5,
      stl: 3,
      blk: 0,
      fgm: 8,
      fga: 19,
      ftm: 0,
      fta: 0,
      tpm: 1,
      tpa: 3,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 21,
      reb: 5,
      ast: 2,
      stl: 0,
      blk: 0,
      fgm: 8,
      fga: 18,
      ftm: 3,
      fta: 8,
      tpm: 2,
      tpa: 6,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 21,
      reb: 1,
      ast: 6,
      stl: 2,
      blk: 2,
      fgm: 9,
      fga: 15,
      ftm: 0,
      fta: 5,
      tpm: 3,
      tpa: 8,
      to: 5
    }
  }
];

  export default boxScore;

