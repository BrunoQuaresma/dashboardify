import { DashboardSchema } from "../types";

export const exampleData: DashboardSchema = {
  sections: [
    {
      title: "Users",
      chart: {
        label: "Last 7 days sign ups",
        type: "line",
        lines: [
          {
            id: "Sign ups",
            color: "#00B5D8",
            data: [
              {
                y: 230,
                x: "14-02",
              },
              {
                y: 450,
                x: "15-02",
              },
              {
                y: 874,
                x: "16-02",
              },
              {
                y: 310,
                x: "17-02",
              },
              {
                y: 240,
                x: "18-02",
              },
              {
                y: 150,
                x: "19-02",
              },
              {
                y: 675,
                x: "20-02",
              },
            ],
          },
        ],
      },
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
};
