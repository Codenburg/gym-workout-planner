import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axiosInstance from "./lib/axios-instance";

interface Routine {
  id: number;
  name: string;
  description?: string;
}

export default function App() {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const fetchRoutines = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get<Routine[]>("/routines/");
      setRoutines(response.data);
    } catch (error) {
      console.error("fetchRoutines error:", error);
    }
  };

  const createRoutine = async (): Promise<void> => {
    try {
      const newRoutine = {
        name: "Rutina automática",
        description: "Generada desde el botón",
      };
      await axiosInstance.post<Routine>("/routines/", newRoutine);
      await fetchRoutines();
    } catch (error) {
      console.error("createRoutine error:", error);
    }
  };

  useEffect(() => {
    void fetchRoutines(); // marca intencionalmente la promesa no-await para ESLint
  }, []);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <Button onClick={() => void createRoutine()}>
        Crear y obtener rutina
      </Button>
      <ul className="mt-4 text-sm">
        {routines.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
