import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 10,
      reb: 3,
      ast: 1,
      stl: 1,
      blk: 1,
      fgm: 3,
      fga: 7,
      ftm: 2,
      fta: 6,
      tpm: 2,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 21,
      reb: 2,
      ast: 4,
      stl: 3,
      blk: 2,
      fgm: 9,
      fga: 27,
      ftm: 0,
      fta: 2,
      tpm: 3,
      tpa: 4,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 2,
      reb: 1,
      ast: 6,
      stl: 1,
      blk: 0,
      fgm: 0,
      fga: 0,
      ftm: 2,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 4
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 24,
      reb: 4,
      ast: 2,
      stl: 0,
      blk: 0,
      fgm: 11,
      fga: 17,
      ftm: 0,
      fta: 0,
      tpm: 2,
      tpa: 5,
      to: 2
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 14,
      reb: 12,
      ast: 7,
      stl: 1,
      blk: 2,
      fgm: 4,
      fga: 8,
      ftm: 3,
      fta: 6,
      tpm: 3,
      tpa: 7,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 24,
      reb: 10,
      ast: 5,
      stl: 3,
      blk: 1,
      fgm: 10,
      fga: 20,
      ftm: 3,
      fta: 3,
      tpm: 1,
      tpa: 3,
      to: 2
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 9,
      reb: 1,
      ast: 6,
      stl: 1,
      blk: 0,
      fgm: 3,
      fga: 4,
      ftm: 1,
      fta: 5,
      tpm: 2,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 14,
      reb: 11,
      ast: 7,
      stl: 1,
      blk: 0,
      fgm: 5,
      fga: 14,
      ftm: 2,
      fta: 4,
      tpm: 2,
      tpa: 2,
      to: 1
    }
  }
];

  export default boxScore;

