import { dom } from "@wallerbuilt/mycelia";

import { routes as routesArr } from "../constants";
import { routeChange } from "@/events/index";

const { nav, ul, li, a } = dom;

const NavLinks = routesArr.map((r) =>
  li({}, a({ href: "#", onclick: () => routeChange(r) }, r))
);

const Nav = nav({}, ul({}, NavLinks));

export default Nav;
