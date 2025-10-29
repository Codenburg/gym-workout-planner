import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axiosInstance from "./lib/axios-instance";

interface Exercise {
  id: number;
  name: string;
  description?: string;
}

export default function App() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const fetchExercises = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get<Exercise[]>("/exercises/");
      setExercises(response.data);
    } catch (error) {
      console.error("fetchExercises error:", error);
    }
  };

  const createExercise = async (): Promise<void> => {
    try {
      const newExercise = { name: "Flexiones de brazos", description: "Ejercicio generado desde el botón" };
      await axiosInstance.post<Exercise>("/exercises/", newExercise);
      await fetchExercises();
    } catch (error) {
      console.error("createExercise error:", error);
    }
  };

  useEffect(() => {
    void fetchExercises();
  }, []);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <Button onClick={() => void createExercise()}>Crear y obtener ejercicios</Button>
      <ul className="mt-4 text-sm">
        {exercises.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
