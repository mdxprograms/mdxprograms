import { Emitter } from "@wallerbuilt/mycelia";
import State from "@/types/State";
import { RouteEvents } from "@/types/Routes";
import state from "../state";

const emit = new Emitter<State>();

export const routes = {
  goHome: (): void => {
    state.route = "home";
    emit.dispatch(RouteEvents.GoHome)(state);
  },
  goAbout: (): void => {
    state.route = "about";
    emit.dispatch(RouteEvents.GoAbout)(state);
  },
  onGoHome: emit.on(RouteEvents.GoHome),
  onGoAbout: emit.on(RouteEvents.GoAbout),
};

export const routeChange = (route: string): void => {
  switch (route) {
    case "home":
      routes.goHome();
      break;

    case "about":
      routes.goAbout();
      break;

    default:
      routes.goHome();
      break;
  }
};
