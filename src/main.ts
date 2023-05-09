import { dom, mount } from "@wallerbuilt/mycelia";

import Nav from "@/components/Nav";
import { routes } from "@/events/index";
import Sample from "@/pages/Sample";
import Sample2 from "@/pages/About";
import "./style.css";

const appSelector = "#app";
const headerSelector = "#header";
const footerSelector = "#footer";

const { main, section } = dom;

// Mount nav to header
mount(Nav, headerSelector);

// Mount app
const App = main({}, Sample);
mount(App, appSelector);

// Mount footer
const Footer = section("Footer goes here");
mount(Footer, footerSelector);

// Apply page level route changes
routes.onGoHome(() => {
	App.removeChild(Sample2);
	App.appendChild(Sample);
});

routes.onGoAbout(() => {
	App.removeChild(Sample);
	App.appendChild(Sample2);
});
