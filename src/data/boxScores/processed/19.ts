import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 22,
      reb: 12,
      ast: 3,
      stl: 1,
      blk: 0,
      fgm: 9,
      fga: 12,
      ftm: 1,
      fta: 1,
      tpm: 3,
      tpa: 4,
      to: 1
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 15,
      reb: 5,
      ast: 7,
      stl: 2,
      blk: 1,
      fgm: 6,
      fga: 10,
      ftm: 2,
      fta: 2,
      tpm: 1,
      tpa: 2,
      to: 5
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 21,
      reb: 5,
      ast: 1,
      stl: 0,
      blk: 0,
      fgm: 10,
      fga: 14,
      ftm: 0,
      fta: 0,
      tpm: 1,
      tpa: 2,
      to: 2
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 11,
      reb: 7,
      ast: 5,
      stl: 2,
      blk: 1,
      fgm: 4,
      fga: 11,
      ftm: 1,
      fta: 4,
      tpm: 2,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 1,
      reb: 11,
      ast: 1,
      stl: 3,
      blk: 0,
      fgm: 0,
      fga: 0,
      ftm: 1,
      fta: 1,
      tpm: 0,
      tpa: 0,
      to: 2
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 11,
      reb: 10,
      ast: 4,
      stl: 2,
      blk: 2,
      fgm: 4,
      fga: 10,
      ftm: 1,
      fta: 3,
      tpm: 2,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 14,
      reb: 1,
      ast: 7,
      stl: 0,
      blk: 1,
      fgm: 5,
      fga: 10,
      ftm: 3,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 17,
      reb: 2,
      ast: 8,
      stl: 1,
      blk: 0,
      fgm: 7,
      fga: 17,
      ftm: 2,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 2
    }
  }
];

  export default boxScore;

