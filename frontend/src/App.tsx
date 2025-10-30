import { useState } from "react";
import { Dumbbell, ListChecks, QrCode, Settings } from "lucide-react";
import { ExercisesView } from "./components/ExercisesView";
import { RoutinesView } from "./components/RoutinesView";
import { DeliverablesView } from "./components/DeliverablesView";
import { SettingsView } from "./components/SettingsView";

type View = "routines" |"exercises"  | "deliverables" | "settings";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("routines");

  const renderView = () => {
    switch (currentView) {
      case "routines":
        return <RoutinesView />;
      case "exercises":
        return <ExercisesView />;
      case "deliverables":
        return <DeliverablesView />;
      case "settings":
        return <SettingsView />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">{renderView()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-card">
        <div className="mx-auto flex max-w-lg items-center justify-around px-4 py-3">
          <button
            onClick={() => setCurrentView("routines")}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              currentView === "routines"
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <ListChecks className="h-6 w-6" />
            <span className="text-xs font-medium">Routines</span>
          </button>
          <button
            onClick={() => setCurrentView("exercises")}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              currentView === "exercises"
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Dumbbell className="h-6 w-6" />
            <span className="text-xs font-medium">Exercises</span>
          </button>

          <button
            onClick={() => setCurrentView("deliverables")}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              currentView === "deliverables"
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <QrCode className="h-6 w-6" />
            <span className="text-xs font-medium">QR</span>
          </button>

          <button
            onClick={() => setCurrentView("settings")}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              currentView === "settings"
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
