import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 2,
      reb: 4,
      ast: 5,
      stl: 3,
      blk: 1,
      fgm: 0,
      fga: 0,
      ftm: 2,
      fta: 7,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 12,
      reb: 6,
      ast: 1,
      stl: 3,
      blk: 2,
      fgm: 4,
      fga: 10,
      ftm: 3,
      fta: 3,
      tpm: 1,
      tpa: 1,
      to: 3
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 29,
      reb: 4,
      ast: 6,
      stl: 0,
      blk: 1,
      fgm: 12,
      fga: 34,
      ftm: 2,
      fta: 2,
      tpm: 3,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 4,
      reb: 8,
      ast: 8,
      stl: 0,
      blk: 1,
      fgm: 2,
      fga: 5,
      ftm: 0,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 13,
      reb: 10,
      ast: 1,
      stl: 2,
      blk: 1,
      fgm: 5,
      fga: 14,
      ftm: 2,
      fta: 7,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 17,
      reb: 9,
      ast: 6,
      stl: 1,
      blk: 0,
      fgm: 8,
      fga: 15,
      ftm: 0,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 11,
      reb: 0,
      ast: 1,
      stl: 3,
      blk: 0,
      fgm: 4,
      fga: 8,
      ftm: 0,
      fta: 4,
      tpm: 3,
      tpa: 7,
      to: 5
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 16,
      reb: 9,
      ast: 5,
      stl: 3,
      blk: 1,
      fgm: 8,
      fga: 14,
      ftm: 0,
      fta: 5,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  }
];

  export default boxScore;

