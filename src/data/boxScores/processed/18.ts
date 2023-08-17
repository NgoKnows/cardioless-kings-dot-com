import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 25,
      reb: 12,
      ast: 6,
      stl: 3,
      blk: 1,
      fgm: 11,
      fga: 29,
      ftm: 2,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 0,
      reb: 3,
      ast: 3,
      stl: 1,
      blk: 1,
      fgm: 0,
      fga: 0,
      ftm: 0,
      fta: 4,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 24,
      reb: 0,
      ast: 1,
      stl: 1,
      blk: 0,
      fgm: 11,
      fga: 28,
      ftm: 0,
      fta: 5,
      tpm: 2,
      tpa: 4,
      to: 2
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 6,
      reb: 4,
      ast: 6,
      stl: 0,
      blk: 0,
      fgm: 1,
      fga: 1,
      ftm: 3,
      fta: 5,
      tpm: 1,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 13,
      reb: 0,
      ast: 7,
      stl: 3,
      blk: 0,
      fgm: 5,
      fga: 12,
      ftm: 1,
      fta: 2,
      tpm: 2,
      tpa: 6,
      to: 4
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 20,
      reb: 7,
      ast: 8,
      stl: 3,
      blk: 1,
      fgm: 8,
      fga: 15,
      ftm: 2,
      fta: 2,
      tpm: 2,
      tpa: 4,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 28,
      reb: 2,
      ast: 6,
      stl: 2,
      blk: 1,
      fgm: 11,
      fga: 25,
      ftm: 3,
      fta: 6,
      tpm: 3,
      tpa: 4,
      to: 4
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 22,
      reb: 12,
      ast: 1,
      stl: 1,
      blk: 1,
      fgm: 8,
      fga: 10,
      ftm: 3,
      fta: 7,
      tpm: 3,
      tpa: 8,
      to: 4
    }
  }
];

  export default boxScore;

