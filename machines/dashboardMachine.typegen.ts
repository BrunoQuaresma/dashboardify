// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    assignUrl: "START";
    assignSchema: "done.invoke.stats.loading:invocation[0]";
  };
  internalEvents: {
    "done.invoke.stats.loading:invocation[0]": {
      type: "done.invoke.stats.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    fetchDashboard: "done.invoke.stats.loading:invocation[0]";
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
    | "loading"
    | "idle"
    | "idle.loaded"
    | "idle.error"
    | { idle?: "loaded" | "error" };
  tags: never;
}
