import { dom, mount } from "@wallerbuilt/mycelia";
import Sample from "@/components/Sample";

import "./style.css";

const appSelector = "#app";
const headerSelector = "#header";
const footerSelector = "#footer";

const { main, section } = dom;

const Header = section("header goes here");
mount(Header, headerSelector);

const App = main({}, Sample);
mount(App, appSelector);

const Footer = section("Footer goes here");
mount(Footer, footerSelector);
