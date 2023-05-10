import { Emitter } from "@wallerbuilt/mycelia";
import State from "@/types/State";
import { routeEvents } from "@/events/routes";

const emit = new Emitter<State>();

export const routes = routeEvents(emit);
