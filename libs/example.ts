import { DashboardSchema } from "../types";
import exampleJSON from "../example.json";

export const exampleData = DashboardSchema.parse(exampleJSON);

export const exampleDataStr = JSON.stringify(exampleData, null, 2);
