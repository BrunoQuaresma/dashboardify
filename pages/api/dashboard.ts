import got, { HTTPError } from "got";
import { NextApiHandler } from "next";
import { z } from "zod";

const Url = z.string().url();

const statsHandler: NextApiHandler = async (req, res) => {
  const method = req.method?.toLowerCase();

  if (method !== "get") {
    res.status(404).end();
    return;
  }

  const url = Url.safeParse(req.query.url);
  if (!url.success) {
    res.status(400).json({ message: url.error.message });
    return;
  }

  try {
    const schema = await got(url.data).json();
    res.status(200).json(schema);
  } catch (error) {
    if (error instanceof HTTPError) {
      // We want to proxy all the HTTPErrors
      res.status(error.response.statusCode).json(error.response.body);
      return;
    }

    throw error;
  }
};

export default statsHandler;
