import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 29,
      reb: 3,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 13,
      fga: 24,
      ftm: 0,
      fta: 5,
      tpm: 3,
      tpa: 6,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 16,
      reb: 7,
      ast: 2,
      stl: 2,
      blk: 0,
      fgm: 7,
      fga: 13,
      ftm: 1,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 3
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 21,
      reb: 4,
      ast: 2,
      stl: 3,
      blk: 2,
      fgm: 8,
      fga: 17,
      ftm: 2,
      fta: 4,
      tpm: 3,
      tpa: 7,
      to: 5
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 8,
      reb: 7,
      ast: 2,
      stl: 0,
      blk: 2,
      fgm: 2,
      fga: 3,
      ftm: 2,
      fta: 5,
      tpm: 2,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 14,
      reb: 3,
      ast: 7,
      stl: 3,
      blk: 0,
      fgm: 4,
      fga: 8,
      ftm: 3,
      fta: 6,
      tpm: 3,
      tpa: 6,
      to: 3
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 14,
      reb: 5,
      ast: 8,
      stl: 2,
      blk: 1,
      fgm: 5,
      fga: 15,
      ftm: 2,
      fta: 3,
      tpm: 2,
      tpa: 5,
      to: 2
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 25,
      reb: 5,
      ast: 4,
      stl: 0,
      blk: 1,
      fgm: 10,
      fga: 23,
      ftm: 2,
      fta: 5,
      tpm: 3,
      tpa: 8,
      to: 2
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 14,
      reb: 10,
      ast: 0,
      stl: 3,
      blk: 1,
      fgm: 7,
      fga: 12,
      ftm: 0,
      fta: 5,
      tpm: 0,
      tpa: 0,
      to: 3
    }
  }
];

  export default boxScore;

