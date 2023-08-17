import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 24,
      reb: 7,
      ast: 0,
      stl: 1,
      blk: 0,
      fgm: 11,
      fga: 22,
      ftm: 0,
      fta: 2,
      tpm: 2,
      tpa: 6,
      to: 0
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 19,
      reb: 10,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 7,
      fga: 10,
      ftm: 2,
      fta: 7,
      tpm: 3,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 11,
      reb: 9,
      ast: 1,
      stl: 0,
      blk: 2,
      fgm: 4,
      fga: 10,
      ftm: 3,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 25,
      reb: 6,
      ast: 8,
      stl: 2,
      blk: 1,
      fgm: 10,
      fga: 11,
      ftm: 3,
      fta: 3,
      tpm: 2,
      tpa: 4,
      to: 0
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 17,
      reb: 9,
      ast: 6,
      stl: 3,
      blk: 0,
      fgm: 6,
      fga: 13,
      ftm: 3,
      fta: 4,
      tpm: 2,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 15,
      reb: 3,
      ast: 5,
      stl: 1,
      blk: 2,
      fgm: 7,
      fga: 14,
      ftm: 1,
      fta: 6,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 17,
      reb: 11,
      ast: 5,
      stl: 0,
      blk: 0,
      fgm: 6,
      fga: 16,
      ftm: 2,
      fta: 5,
      tpm: 3,
      tpa: 5,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 18,
      reb: 0,
      ast: 1,
      stl: 0,
      blk: 2,
      fgm: 9,
      fga: 19,
      ftm: 0,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  }
];

  export default boxScore;

