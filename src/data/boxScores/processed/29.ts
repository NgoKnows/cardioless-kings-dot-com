import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 19,
      reb: 3,
      ast: 4,
      stl: 2,
      blk: 1,
      fgm: 9,
      fga: 24,
      ftm: 0,
      fta: 3,
      tpm: 1,
      tpa: 3,
      to: 3
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 17,
      reb: 4,
      ast: 4,
      stl: 0,
      blk: 0,
      fgm: 6,
      fga: 16,
      ftm: 2,
      fta: 5,
      tpm: 3,
      tpa: 4,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 19,
      reb: 4,
      ast: 5,
      stl: 3,
      blk: 0,
      fgm: 7,
      fga: 10,
      ftm: 2,
      fta: 5,
      tpm: 3,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 11,
      reb: 0,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 4,
      fga: 12,
      ftm: 1,
      fta: 3,
      tpm: 2,
      tpa: 5,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 10,
      reb: 3,
      ast: 7,
      stl: 0,
      blk: 1,
      fgm: 4,
      fga: 8,
      ftm: 1,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 12,
      reb: 11,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 4,
      fga: 6,
      ftm: 1,
      fta: 2,
      tpm: 3,
      tpa: 4,
      to: 4
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 22,
      reb: 1,
      ast: 6,
      stl: 0,
      blk: 2,
      fgm: 10,
      fga: 28,
      ftm: 1,
      fta: 1,
      tpm: 1,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 12,
      reb: 2,
      ast: 5,
      stl: 3,
      blk: 0,
      fgm: 5,
      fga: 13,
      ftm: 1,
      fta: 6,
      tpm: 1,
      tpa: 3,
      to: 1
    }
  }
];

  export default boxScore;

