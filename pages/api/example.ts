import { NextApiHandler } from "next";
import { DashboardSchema } from "../../types";

const exampleHandler: NextApiHandler<DashboardSchema> = (_req, res) => {
  res.status(200).json({
    sections: [
      {
        title: "Users",
        stats: [
          {
            label: "Total",
            value: 1540,
          },
          {
            label: "Today",
            value: 20,
          },
          {
            label: "Pro Users",
            value: 125,
          },
        ],
      },

      {
        title: "Revenue",
        stats: [
          {
            label: "Total",
            value: 8654,
            prefix: "$",
          },
          {
            label: "This month",
            value: 804.5,
            prefix: "$",
          },
          {
            label: "MRR",
            value: 968.43,
            prefix: "$",
          },
        ],
      },

      {
        title: "Requests",
        table: {
          columns: ["User", "Number of requests"],
          data: [
            ["bruno@hotmail.com", 3450],
            ["joao@hotmail.com", 2789],
            ["neto@hotmail.com", 2379],
            ["pedro@hotmail.com", 1045],
            ["jr@hotmail.com", 875],
            ["beto@hotmail.com", 294],
          ],
        },
      },
    ],
  });
};

export default exampleHandler;
