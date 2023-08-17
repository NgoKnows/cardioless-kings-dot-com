import players from "@/data/players";
  import { ProcessedPlayerData } from '@/types/types'

  const boxScore: ProcessedPlayerData[] = [
  {
    player: players.Alex.id,
    stats: {
      pt: 16,
      reb: 11,
      ast: 1,
      stl: 2,
      blk: 1,
      fgm: 7,
      fga: 15,
      ftm: 1,
      fta: 1,
      tpm: 1,
      tpa: 1,
      to: 5
    }
  },
  {
    player: players.Michael.id,
    stats: {
      pt: 12,
      reb: 4,
      ast: 0,
      stl: 2,
      blk: 0,
      fgm: 4,
      fga: 7,
      ftm: 1,
      fta: 1,
      tpm: 3,
      tpa: 3,
      to: 4
    }
  },
  {
    player: players.Daniel.id,
    stats: {
      pt: 18,
      reb: 12,
      ast: 6,
      stl: 1,
      blk: 1,
      fgm: 6,
      fga: 11,
      ftm: 3,
      fta: 4,
      tpm: 3,
      tpa: 5,
      to: 3
    }
  },
  {
    player: players.Robin.id,
    stats: {
      pt: 15,
      reb: 6,
      ast: 6,
      stl: 1,
      blk: 2,
      fgm: 5,
      fga: 8,
      ftm: 2,
      fta: 2,
      tpm: 3,
      tpa: 6,
      to: 3
    }
  },
  {
    player: players.DeNoris.id,
    stats: {
      pt: 9,
      reb: 2,
      ast: 7,
      stl: 2,
      blk: 1,
      fgm: 3,
      fga: 5,
      ftm: 0,
      fta: 4,
      tpm: 3,
      tpa: 7,
      to: 1
    }
  },
  {
    player: players.Nguyen.id,
    stats: {
      pt: 11,
      reb: 9,
      ast: 5,
      stl: 0,
      blk: 0,
      fgm: 4,
      fga: 11,
      ftm: 2,
      fta: 6,
      tpm: 1,
      tpa: 3,
      to: 0
    }
  },
  {
    player: players.Hexi.id,
    stats: {
      pt: 17,
      reb: 3,
      ast: 6,
      stl: 2,
      blk: 0,
      fgm: 7,
      fga: 20,
      ftm: 2,
      fta: 3,
      tpm: 1,
      tpa: 2,
      to: 0
    }
  },
  {
    player: players.Jesse.id,
    stats: {
      pt: 18,
      reb: 4,
      ast: 4,
      stl: 0,
      blk: 0,
      fgm: 6,
      fga: 16,
      ftm: 3,
      fta: 6,
      tpm: 3,
      tpa: 6,
      to: 4
    }
  }
];

  export default boxScore;

