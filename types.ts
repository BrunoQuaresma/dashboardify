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

export const Section = z.object({
  title: z.string(),
  stats: z.array(Stat).optional(),
  table: Table.optional(),
});

export type Section = z.infer<typeof Section>;

export const DashboardSchema = z.object({
  sections: z.array(Section),
});

export type DashboardSchema = z.infer<typeof DashboardSchema>;
