import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 12,
      reb: 11,
      ast: 1,
      stl: 2,
      blk: 1,
      fgm: 4,
      fga: 5,
      ftm: 3,
      fta: 7,
      tpm: 1,
      tpa: 1,
      to: 0
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 17,
      reb: 7,
      ast: 4,
      stl: 1,
      blk: 0,
      fgm: 6,
      fga: 7,
      ftm: 2,
      fta: 6,
      tpm: 3,
      tpa: 8,
      to: 1
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 5,
      reb: 12,
      ast: 0,
      stl: 2,
      blk: 0,
      fgm: 2,
      fga: 6,
      ftm: 0,
      fta: 0,
      tpm: 1,
      tpa: 2,
      to: 4
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 6,
      reb: 3,
      ast: 6,
      stl: 0,
      blk: 2,
      fgm: 3,
      fga: 5,
      ftm: 0,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 20,
      reb: 2,
      ast: 3,
      stl: 1,
      blk: 2,
      fgm: 8,
      fga: 11,
      ftm: 2,
      fta: 7,
      tpm: 2,
      tpa: 2,
      to: 1
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 10,
      reb: 12,
      ast: 1,
      stl: 0,
      blk: 2,
      fgm: 4,
      fga: 6,
      ftm: 0,
      fta: 4,
      tpm: 2,
      tpa: 3,
      to: 3
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 21,
      reb: 4,
      ast: 7,
      stl: 2,
      blk: 1,
      fgm: 9,
      fga: 15,
      ftm: 3,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 11,
      reb: 12,
      ast: 7,
      stl: 2,
      blk: 2,
      fgm: 4,
      fga: 7,
      ftm: 2,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 1
    }
  }
];

  export default boxScore;

