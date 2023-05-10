export type Routes = "home" | "about";

export const RouteEvents = {
  GoHome: "pageChange:home",
  GoAbout: "pageChange:about",
} as const;
