import { dom } from "@wallerbuilt/mycelia";

import { Routes } from "@/types/Routes";
import { routes } from "@/events/index";
import state from "../state";

const { nav, ul, li, a } = dom;

const routeChange = (route: string) => {
	switch (route) {
		case Routes.Home:
			routes.goHome(state);
			break;

		case Routes.About:
			routes.goAbout(state);
			break;

		default:
			routes.goHome(state);
			break;
	}
};

const NavLinks =
	Object.values(Routes).map((r) =>
		li({}, a({ href: "#", onclick: () => routeChange(r) }, r))
	)

const Nav = nav(
	{},
	ul(
		{},
		NavLinks
	)
);

export default Nav;
