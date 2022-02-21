import { assign, createMachine } from "xstate";
import { fetchDashboard } from "../libs/api";
import { DashboardSchema } from "../types";

type DashboardMachineContext = {
  url?: string;
  schema?: DashboardSchema;
  lastUpdate?: Date;
  error?: unknown;
};

type DashboardMachineEvent = { type: "START"; url: string };

export const dashboardMachine = createMachine(
  {
    id: "dashboard",
    initial: "notStarted",
    schema: {
      events: {} as DashboardMachineEvent,
      context: {} as DashboardMachineContext,
      services: {} as {
        fetchDashboard: {
          data: DashboardSchema;
        };
      },
    },
    tsTypes: {} as import("./dashboardMachine.typegen").Typegen0,
    states: {
      notStarted: {
        initial: "idle",
        on: {
          START: {
            target: "loading",
            actions: ["assignUrl"],
          },
        },
        states: {
          idle: {},
          error: {},
        },
      },
      loading: {
        invoke: {
          src: "fetchDashboard",
          onDone: {
            target: "loaded",
            actions: ["assignSchema"],
          },
          onError: {
            target: "notStarted.error",
            actions: ["assingError"],
          },
        },
      },
      loaded: {},
    },
  },
  {
    services: {
      fetchDashboard: (ctx, event) => {
        if (event.type === "START") {
          return fetchDashboard(event.url);
        }

        if (!ctx.url) {
          throw new Error("No URL assigned to fetch the dashboard.");
        }

        return fetchDashboard(ctx.url);
      },
    },
    actions: {
      assignSchema: assign({
        schema: (_ctx, event) => event.data,
        lastUpdate: (_ctx, _event) => new Date(),
      }),
      assignUrl: assign({
        url: (_ctx, event) => event.url,
      }),
      assingError: assign({
        error: (_ctx, event) => event.data,
      }),
    },
  }
);
