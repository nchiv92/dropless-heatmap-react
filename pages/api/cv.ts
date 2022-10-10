import { NextApiRequest, NextApiResponse } from "next";
import { CVData } from "../../utils/types";
import { getCVData } from "./cv-data/cv-data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CVData>
) {
  const response = await getCVData();
  res.status(200).json(response);
}
