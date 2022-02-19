import got from "got";
import { NextApiHandler } from "next";

const statsHandler: NextApiHandler = async (req, res) => {
  if (req.method?.toLowerCase() !== "get") {
    res.status(404).end();
    return;
  }

  const { url } = req.query;
  if (typeof url !== "string") {
    res.status(400).json({
      message: `The "url" query parameter is required and should be a string.`,
    });
    return;
  }

  const schema = await got(url).json();
  res.status(200).json(schema);
};

export default statsHandler;
