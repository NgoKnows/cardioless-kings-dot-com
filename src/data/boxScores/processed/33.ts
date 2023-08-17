import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 12,
      reb: 6,
      ast: 4,
      stl: 3,
      blk: 2,
      fgm: 5,
      fga: 10,
      ftm: 1,
      fta: 6,
      tpm: 1,
      tpa: 2,
      to: 2
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 8,
      reb: 10,
      ast: 8,
      stl: 3,
      blk: 0,
      fgm: 2,
      fga: 6,
      ftm: 3,
      fta: 4,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 12,
      reb: 2,
      ast: 5,
      stl: 1,
      blk: 2,
      fgm: 4,
      fga: 6,
      ftm: 1,
      fta: 2,
      tpm: 3,
      tpa: 5,
      to: 0
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 4,
      reb: 9,
      ast: 1,
      stl: 1,
      blk: 1,
      fgm: 1,
      fga: 3,
      ftm: 2,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 16,
      reb: 1,
      ast: 7,
      stl: 1,
      blk: 1,
      fgm: 7,
      fga: 7,
      ftm: 1,
      fta: 1,
      tpm: 1,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 30,
      reb: 4,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 12,
      fga: 26,
      ftm: 3,
      fta: 6,
      tpm: 3,
      tpa: 7,
      to: 0
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 7,
      reb: 0,
      ast: 1,
      stl: 1,
      blk: 1,
      fgm: 2,
      fga: 3,
      ftm: 3,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 0,
      reb: 7,
      ast: 4,
      stl: 3,
      blk: 1,
      fgm: 0,
      fga: 0,
      ftm: 0,
      fta: 2,
      tpm: 0,
      tpa: 0,
      to: 3
    }
  }
];

  export default boxScore;

