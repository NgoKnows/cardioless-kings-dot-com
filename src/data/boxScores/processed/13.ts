import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 25,
      reb: 12,
      ast: 0,
      stl: 1,
      blk: 0,
      fgm: 11,
      fga: 32,
      ftm: 2,
      fta: 5,
      tpm: 1,
      tpa: 1,
      to: 0
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 19,
      reb: 1,
      ast: 6,
      stl: 0,
      blk: 0,
      fgm: 8,
      fga: 12,
      ftm: 0,
      fta: 0,
      tpm: 3,
      tpa: 5,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 12,
      reb: 3,
      ast: 1,
      stl: 3,
      blk: 1,
      fgm: 4,
      fga: 10,
      ftm: 3,
      fta: 5,
      tpm: 1,
      tpa: 1,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 16,
      reb: 5,
      ast: 5,
      stl: 0,
      blk: 2,
      fgm: 7,
      fga: 15,
      ftm: 0,
      fta: 1,
      tpm: 2,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 5,
      reb: 7,
      ast: 8,
      stl: 1,
      blk: 0,
      fgm: 2,
      fga: 4,
      ftm: 1,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 15,
      reb: 0,
      ast: 7,
      stl: 0,
      blk: 0,
      fgm: 6,
      fga: 18,
      ftm: 2,
      fta: 4,
      tpm: 1,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 10,
      reb: 7,
      ast: 1,
      stl: 3,
      blk: 0,
      fgm: 3,
      fga: 5,
      ftm: 1,
      fta: 3,
      tpm: 3,
      tpa: 7,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 28,
      reb: 3,
      ast: 5,
      stl: 3,
      blk: 2,
      fgm: 12,
      fga: 13,
      ftm: 1,
      fta: 5,
      tpm: 3,
      tpa: 5,
      to: 1
    }
  }
];

  export default boxScore;

