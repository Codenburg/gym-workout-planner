import { use } from "react";
import { NavContext } from "./context";

interface ButtonProps {
  view: string;
  icon: React.ElementType;
  label: string;
}

export function Button({ view, icon: Icon, label }: ButtonProps) {
  const nav = use(NavContext);
  if (!nav) throw new Error("Button must be used within a NavProvider");

  const { currentView, setCurrentView } = nav;
  const isActive = currentView === view;

  return (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
