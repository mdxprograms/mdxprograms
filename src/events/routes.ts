import { Emitter } from "@wallerbuilt/mycelia";
import State from "@/types/State";
import { RouteEvents, Routes } from "@/types/Routes";
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
  goStore(): void {
    state.route = "store";
    emit.dispatch(RouteEvents.GoStore)(state);
  },
  onGoHome: emit.on(RouteEvents.GoHome),
  onGoAbout: emit.on(RouteEvents.GoAbout),
  onGoStore: emit.on(RouteEvents.GoStore),
  changeRoute(route: Routes): void {
    switch (route) {
      case "home":
        this.goHome();
        break;

      case "about":
        this.goAbout();
        break;

      case "store":
        this.goStore();
        break;

      default:
        this.goHome();
        break;
    }
  },
});
