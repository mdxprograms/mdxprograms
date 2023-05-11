import { dom } from "@wallerbuilt/mycelia";

import { Routes } from "@/types/Routes";
import { routes as routeEvents } from "@/events/index";
import { routes as routeData } from "../constants";

import ThemeToggleBtn from "@/components/ThemeToggleBtn";

const { nav, ul, li, a } = dom;

const NavItem = (r: Routes) =>
  li({}, a({ href: "#", onclick: () => routeEvents.changeRoute(r) }, r));

const Nav = nav({}, ul({}, [...routeData.map(NavItem), ThemeToggleBtn]));

export default Nav;
