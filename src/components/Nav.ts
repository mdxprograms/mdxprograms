import { dom } from "@wallerbuilt/mycelia";

import { routes } from "../constants";
import { routes as routeEvents } from "@/events/index";

const { nav, ul, li, a } = dom;

const Nav = nav(
  {},
  ul(
    {},
    routes.map((r) =>
      li({}, a({ href: "#", onclick: () => routeEvents.changeRoute(r) }, r))
    )
  )
);

export default Nav;
