import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 16,
      reb: 0,
      ast: 3,
      stl: 2,
      blk: 2,
      fgm: 6,
      fga: 7,
      ftm: 2,
      fta: 6,
      tpm: 2,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 17,
      reb: 7,
      ast: 6,
      stl: 0,
      blk: 2,
      fgm: 7,
      fga: 16,
      ftm: 2,
      fta: 2,
      tpm: 1,
      tpa: 1,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 17,
      reb: 12,
      ast: 6,
      stl: 1,
      blk: 1,
      fgm: 6,
      fga: 16,
      ftm: 2,
      fta: 3,
      tpm: 3,
      tpa: 7,
      to: 1
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 21,
      reb: 4,
      ast: 0,
      stl: 2,
      blk: 1,
      fgm: 8,
      fga: 20,
      ftm: 3,
      fta: 4,
      tpm: 2,
      tpa: 5,
      to: 5
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 12,
      reb: 8,
      ast: 0,
      stl: 3,
      blk: 2,
      fgm: 4,
      fga: 10,
      ftm: 2,
      fta: 3,
      tpm: 2,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 14,
      reb: 0,
      ast: 2,
      stl: 2,
      blk: 1,
      fgm: 5,
      fga: 6,
      ftm: 2,
      fta: 3,
      tpm: 2,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 23,
      reb: 8,
      ast: 6,
      stl: 0,
      blk: 0,
      fgm: 9,
      fga: 18,
      ftm: 2,
      fta: 6,
      tpm: 3,
      tpa: 9,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 18,
      reb: 10,
      ast: 0,
      stl: 2,
      blk: 1,
      fgm: 8,
      fga: 15,
      ftm: 1,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  }
];

  export default boxScore;

