import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 21,
      reb: 3,
      ast: 4,
      stl: 1,
      blk: 0,
      fgm: 8,
      fga: 21,
      ftm: 3,
      fta: 5,
      tpm: 2,
      tpa: 2,
      to: 2
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 17,
      reb: 8,
      ast: 2,
      stl: 0,
      blk: 2,
      fgm: 8,
      fga: 8,
      ftm: 1,
      fta: 3,
      tpm: 0,
      tpa: 0,
      to: 3
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 7,
      reb: 4,
      ast: 5,
      stl: 0,
      blk: 1,
      fgm: 2,
      fga: 2,
      ftm: 2,
      fta: 4,
      tpm: 1,
      tpa: 3,
      to: 5
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 27,
      reb: 10,
      ast: 8,
      stl: 0,
      blk: 1,
      fgm: 12,
      fga: 15,
      ftm: 1,
      fta: 3,
      tpm: 2,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 20,
      reb: 7,
      ast: 6,
      stl: 0,
      blk: 2,
      fgm: 9,
      fga: 12,
      ftm: 2,
      fta: 5,
      tpm: 0,
      tpa: 0,
      to: 5
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 21,
      reb: 11,
      ast: 5,
      stl: 0,
      blk: 0,
      fgm: 8,
      fga: 21,
      ftm: 2,
      fta: 7,
      tpm: 3,
      tpa: 5,
      to: 1
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 5,
      reb: 8,
      ast: 6,
      stl: 0,
      blk: 1,
      fgm: 1,
      fga: 3,
      ftm: 3,
      fta: 7,
      tpm: 0,
      tpa: 0,
      to: 1
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 10,
      reb: 11,
      ast: 7,
      stl: 3,
      blk: 2,
      fgm: 3,
      fga: 4,
      ftm: 3,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 1
    }
  }
];

  export default boxScore;

