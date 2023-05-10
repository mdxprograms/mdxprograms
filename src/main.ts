import { dom, mount } from "@wallerbuilt/mycelia";

import Nav from "@/components/Nav";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";

import "./styles.css";
import { routes as routeEvents } from "./events";

const appSelector = "#app";
const headerSelector = "#header";
const footerSelector = "#footer";

const { main, section } = dom;

// Mount nav to header
mount(Nav, headerSelector);

// Mount app
const App = main({}, HomePage);
mount(App, appSelector);

// Mount footer
const Footer = section("Footer goes here");
mount(Footer, footerSelector);

// Apply page level route changes
routeEvents.onGoHome(() => {
  App.innerHTML = "";
  App.appendChild(HomePage);
});

routeEvents.onGoAbout(() => {
  App.innerHTML = "";
  App.appendChild(AboutPage);
});
