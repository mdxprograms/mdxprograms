import { dom, mount } from "@wallerbuilt/mycelia";

import Nav from "@/components/Nav";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import StorePage from "@/pages/Store";
import Dropdown from "./dropdown";
import "./wb-dropdown";
import "@/pages/WebComponents/index";

import "./styles.css";
import { routes as routeEvents } from "./events";
import { Routes } from "./types/Routes";

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

// apply explicit App view changes
const addHomePage = () => App.appendChild(HomePage);
const addAboutPage = () => App.appendChild(AboutPage);
const addStorePage = () => App.appendChild(StorePage);

// routing helper
const routeTo = (key: Routes) => () => {
  App.innerHTML = "";

  switch (key) {
    case "home":
      addHomePage();
      return;
    case "about":
      addAboutPage();
      return;
    case "store":
      addStorePage();
      return;

    default:
      addHomePage();
      return;
  }
};

// Apply page level route changes

/* home */
routeEvents.onGoHome(routeTo("home"));

/* about */
routeEvents.onGoAbout(routeTo("about"));

/* store */
routeEvents.onGoStore(routeTo("store"));

App.insertAdjacentHTML("afterbegin", "<wb-nav></wb-nav>");

// Example using web component class
App.insertAdjacentHTML("beforeend", "<wb-dropdown></wb-dropdown>");

// Example using mycelia only
App.appendChild(Dropdown);
