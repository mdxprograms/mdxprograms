import { Emitter } from "@wallerbuilt/mycelia";
import State from "@/types/State";
import { RouteEvents } from "@/types/Routes";
import state from "../state";

export const routeEvents = (emit: Emitter<State>) => ({
  goHome(): void {
    state.route = "home";
    emit.dispatch(RouteEvents.GoHome)(state);
  },
  goAbout(): void {
    state.route = "about";
    emit.dispatch(RouteEvents.GoAbout)(state);
  },
  onGoHome: emit.on(RouteEvents.GoHome),
  onGoAbout: emit.on(RouteEvents.GoAbout),
  changeRoute(route: string): void {
    switch (route) {
      case "home":
        this.goHome();
        break;

      case "about":
        this.goAbout();
        break;

      default:
        this.goHome();
        break;
    }
  },
});
