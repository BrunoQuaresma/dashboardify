import { NextApiHandler } from "next";
import { exampleData } from "../../../libs/example";
import { DashboardSchema } from "../../../types";

type ApiError = { message: string };

const authExampleHandler: NextApiHandler<DashboardSchema | ApiError> = (
  req,
  res
) => {
  const secret = req.query.secret;

  if (typeof secret !== "string") {
    res.status(401).json({
      message:
        'This is an authorization example. To access the dashboard, type the secret below. The value is "12345678".',
    });
    return;
  }

  if (secret !== "12345678") {
    res.status(401).json({
      message: "Invalid secret.",
    });
    return;
  }

  res.status(200).json(exampleData);
};

export default authExampleHandler;
