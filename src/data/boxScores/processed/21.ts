import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 27,
      reb: 11,
      ast: 3,
      stl: 2,
      blk: 2,
      fgm: 11,
      fga: 30,
      ftm: 3,
      fta: 6,
      tpm: 2,
      tpa: 4,
      to: 2
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 11,
      reb: 4,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 5,
      fga: 11,
      ftm: 0,
      fta: 2,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 9,
      reb: 12,
      ast: 7,
      stl: 3,
      blk: 0,
      fgm: 3,
      fga: 6,
      ftm: 2,
      fta: 2,
      tpm: 1,
      tpa: 3,
      to: 3
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 17,
      reb: 2,
      ast: 6,
      stl: 0,
      blk: 0,
      fgm: 7,
      fga: 20,
      ftm: 1,
      fta: 2,
      tpm: 2,
      tpa: 4,
      to: 3
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 12,
      reb: 5,
      ast: 3,
      stl: 2,
      blk: 1,
      fgm: 6,
      fga: 7,
      ftm: 0,
      fta: 0,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 21,
      reb: 6,
      ast: 7,
      stl: 3,
      blk: 0,
      fgm: 10,
      fga: 15,
      ftm: 0,
      fta: 1,
      tpm: 1,
      tpa: 3,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 23,
      reb: 1,
      ast: 5,
      stl: 2,
      blk: 0,
      fgm: 10,
      fga: 14,
      ftm: 1,
      fta: 1,
      tpm: 2,
      tpa: 6,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 18,
      reb: 1,
      ast: 3,
      stl: 0,
      blk: 0,
      fgm: 8,
      fga: 9,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 4,
      to: 0
    }
  }
];

  export default boxScore;

