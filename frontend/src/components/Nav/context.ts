import { createContext } from "react";

interface Views {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const NavContext = createContext<Views | null>(null);
