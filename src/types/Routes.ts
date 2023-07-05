export type Routes = "home" | "about" | "store";

export const RouteEvents = {
  GoHome: "pageChange:home",
  GoAbout: "pageChange:about",
  GoStore: "pageChange:store",
} as const;
