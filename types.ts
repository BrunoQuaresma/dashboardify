import { z } from "zod";

export const Stat = z.object({
  label: z.string(),
  value: z.string().or(z.number()),
  prefix: z.string().optional(),
});

export type Stat = z.infer<typeof Stat>;

const Table = z.object({
  columns: z.array(z.string()),
  data: z.array(z.array(z.string().or(z.number()))),
});

export type Table = z.infer<typeof Table>;

export const LineChart = z.object({
  label: z.string(),
  type: z.literal("line"),
  lines: z.array(
    z.object({
      id: z.string(),
      color: z.string(),
      data: z.array(
        z.object({
          y: z.number(),
          x: z.string(),
        })
      ),
    })
  ),
});

export type LineChart = z.infer<typeof LineChart>;

export const Chart = LineChart;

export type Chart = z.infer<typeof Chart>;

export const Section = z.object({
  title: z.string(),
  stats: z.array(Stat).optional(),
  table: Table.optional(),
  chart: Chart.optional(),
});

export type Section = z.infer<typeof Section>;

export const DashboardSchema = z.object({
  sections: z.array(Section),
});

export type DashboardSchema = z.infer<typeof DashboardSchema>;
