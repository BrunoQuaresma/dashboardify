import ky from "ky";
import { DashboardSchema } from "../types";

export const fetchDashboard = async (url: string): Promise<DashboardSchema> => {
  const apiResponse = await ky(`/api/dashboard?url=${encodeURI(url)}`).json();
  return DashboardSchema.parse(apiResponse);
};
