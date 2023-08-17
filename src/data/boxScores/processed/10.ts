import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 25,
      reb: 12,
      ast: 0,
      stl: 2,
      blk: 0,
      fgm: 11,
      fga: 22,
      ftm: 2,
      fta: 6,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 28,
      reb: 10,
      ast: 7,
      stl: 2,
      blk: 1,
      fgm: 12,
      fga: 22,
      ftm: 2,
      fta: 7,
      tpm: 2,
      tpa: 4,
      to: 1
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 21,
      reb: 4,
      ast: 4,
      stl: 1,
      blk: 2,
      fgm: 9,
      fga: 19,
      ftm: 0,
      fta: 1,
      tpm: 3,
      tpa: 8,
      to: 4
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 15,
      reb: 12,
      ast: 2,
      stl: 0,
      blk: 1,
      fgm: 6,
      fga: 10,
      ftm: 1,
      fta: 5,
      tpm: 2,
      tpa: 2,
      to: 3
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 5,
      reb: 2,
      ast: 6,
      stl: 3,
      blk: 0,
      fgm: 1,
      fga: 3,
      ftm: 2,
      fta: 3,
      tpm: 1,
      tpa: 1,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 16,
      reb: 8,
      ast: 4,
      stl: 0,
      blk: 1,
      fgm: 5,
      fga: 7,
      ftm: 3,
      fta: 3,
      tpm: 3,
      tpa: 6,
      to: 5
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 8,
      reb: 8,
      ast: 3,
      stl: 2,
      blk: 2,
      fgm: 4,
      fga: 8,
      ftm: 0,
      fta: 2,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 30,
      reb: 12,
      ast: 8,
      stl: 2,
      blk: 1,
      fgm: 12,
      fga: 27,
      ftm: 3,
      fta: 7,
      tpm: 3,
      tpa: 8,
      to: 2
    }
  }
];

  export default boxScore;

