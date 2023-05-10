import { dom } from "@wallerbuilt/mycelia";
import state from "../state";

const { button } = dom;

const handleThemeChange = () =>
  state.theme === "light" ? (state.theme = "dark") : (state.theme = "light");

const ThemeToggleBtn = button({ onclick: handleThemeChange }, "Toggle theme");

export default ThemeToggleBtn;
