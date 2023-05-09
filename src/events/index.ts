import { Emitter } from "@wallerbuilt/mycelia";
import State from "@/types/State";
import { RouteEvents } from "@/types/Routes";

const emit = new Emitter<State>();

export const routes = {
	goHome: emit.dispatch(RouteEvents.GoHome),
	goAbout: emit.dispatch(RouteEvents.GoAbout),
	onGoHome: emit.on(RouteEvents.GoHome),
	onGoAbout: emit.on(RouteEvents.GoAbout),
};
