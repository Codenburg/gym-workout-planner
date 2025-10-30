import { use } from "react";
import { NavContext } from "./context";
import {
  RoutinesView,
  ExercisesView,
  DeliverablesView,
  SettingsView,
} from "../Views";

export function View() {
  const nav = use(NavContext);
  if (!nav) throw new Error("View must be used within a NavProvider");

  const { currentView } = nav;

  switch (currentView) {
    case "routines":
      return <RoutinesView />;
    case "exercises":
      return <ExercisesView />;
    case "deliverables":
      return <DeliverablesView />;
    case "settings":
      return <SettingsView />;
    default:
      return null;
  }
}
