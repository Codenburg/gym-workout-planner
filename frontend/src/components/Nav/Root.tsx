import { useState, type ReactNode } from "react";
import { NavContext } from "./context";
import { View } from "./View";

export function Root({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState("routines");
  return (
    <NavContext value={{ currentView, setCurrentView }}>
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 overflow-y-auto pb-20">
          <View />
        </main>
        <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-card">
          <div className="mx-auto flex max-w-lg items-center justify-around px-4 py-3">
            {children}
          </div>
        </nav>
      </div>
    </NavContext>
  );
}
