export enum Routes {
	Home = "home",
	About = "about",
}

export const RouteEvents = {
	GoHome: "pageChange:home",
	GoAbout: "pageChange:about",
} as const;
