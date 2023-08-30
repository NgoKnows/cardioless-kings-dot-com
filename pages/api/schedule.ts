import checkPSBLForGames from "@/scripts/checkPSBLForGames";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const games = await checkPSBLForGames();
  res.status(200).json(games);
}
