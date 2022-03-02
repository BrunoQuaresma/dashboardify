import { NextApiHandler } from "next";
import { exampleData } from "../../../libs/example";
import { DashboardSchema } from "../../../types";

const simpleExampleHandler: NextApiHandler<DashboardSchema> = (_req, res) => {
  res.status(200).json(exampleData);
};

export default simpleExampleHandler;
