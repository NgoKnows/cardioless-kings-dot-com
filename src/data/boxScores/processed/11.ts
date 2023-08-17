import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 9,
      reb: 7,
      ast: 6,
      stl: 2,
      blk: 2,
      fgm: 4,
      fga: 12,
      ftm: 1,
      fta: 1,
      tpm: 0,
      tpa: 0,
      to: 3
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 18,
      reb: 12,
      ast: 6,
      stl: 3,
      blk: 0,
      fgm: 8,
      fga: 10,
      ftm: 0,
      fta: 3,
      tpm: 2,
      tpa: 5,
      to: 0
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 24,
      reb: 9,
      ast: 6,
      stl: 0,
      blk: 1,
      fgm: 10,
      fga: 15,
      ftm: 3,
      fta: 7,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 23,
      reb: 12,
      ast: 1,
      stl: 2,
      blk: 2,
      fgm: 10,
      fga: 12,
      ftm: 1,
      fta: 5,
      tpm: 2,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 20,
      reb: 12,
      ast: 2,
      stl: 0,
      blk: 1,
      fgm: 8,
      fga: 15,
      ftm: 3,
      fta: 5,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 23,
      reb: 4,
      ast: 4,
      stl: 2,
      blk: 0,
      fgm: 10,
      fga: 30,
      ftm: 2,
      fta: 5,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 16,
      reb: 12,
      ast: 4,
      stl: 0,
      blk: 1,
      fgm: 5,
      fga: 5,
      ftm: 3,
      fta: 7,
      tpm: 3,
      tpa: 3,
      to: 3
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 17,
      reb: 3,
      ast: 3,
      stl: 1,
      blk: 1,
      fgm: 6,
      fga: 11,
      ftm: 3,
      fta: 4,
      tpm: 2,
      tpa: 3,
      to: 3
    }
  }
];

  export default boxScore;

