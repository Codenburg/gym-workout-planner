import { Nav } from "@/components/Nav";
import { ListChecks, Dumbbell, QrCode, Settings } from "lucide-react";

export default function App() {
  return (
    <Nav.Root>
      <Nav.Button view="routines" icon={ListChecks} label="Routines" />
      <Nav.Button view="exercises" icon={Dumbbell} label="Exercises" />
      <Nav.Button view="deliverables" icon={QrCode} label="QR" />
      <Nav.Button view="settings" icon={Settings} label="Settings" />
    </Nav.Root>
  );
}
