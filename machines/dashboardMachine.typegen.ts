// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    assignUrl: "START";
    assignSchema: "done.invoke.dashboard.loading:invocation[0]";
    assingError: "error.platform.dashboard.loading:invocation[0]";
  };
  internalEvents: {
    "done.invoke.dashboard.loading:invocation[0]": {
      type: "done.invoke.dashboard.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.dashboard.loading:invocation[0]": {
      type: "error.platform.dashboard.loading:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    fetchDashboard: "done.invoke.dashboard.loading:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchDashboard: "START";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "notStarted"
    | "notStarted.idle"
    | "notStarted.error"
    | "loading"
    | "loaded"
    | { notStarted?: "idle" | "error" };
  tags: never;
}
