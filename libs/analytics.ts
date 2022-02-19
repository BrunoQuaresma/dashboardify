import { Analytics, AnalyticsInstance } from "analytics";
//@ts-ignore
import googleAnalytics from "@analytics/google-analytics";

let analytics: AnalyticsInstance;

export const getAnalytics = () => {
  if (!process.env.NEXT_PUBLIC_GTAG_ID) {
    return undefined;
  }

  if (!analytics) {
    analytics = Analytics({
      plugins: [
        googleAnalytics({
          trackingId: process.env.NEXT_PUBLIC_GTAG_ID,
        }),
      ],
    });
  }

  return analytics;
};
