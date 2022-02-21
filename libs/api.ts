import ky from "ky";
import { DashboardSchema } from "../types";

export const fetchDashboard = async (
  url: string,
  secret?: string
): Promise<DashboardSchema> => {
  const apiResponse = await ky(
    `/api/dashboard?url=${encodeURI(url)}${secret ? `&secret=${secret}` : ""}`
  ).json();
  return DashboardSchema.parse(apiResponse);
};
