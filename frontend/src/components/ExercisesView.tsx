import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Edit2, Trash2, Plus, Search } from "lucide-react";
import { useState } from "react";

const exercises = [
  {
    id: 1,
    name: "Bench Press",
    description: "Compound exercise for chest, shoulders and triceps",
    image:
      "https://static.strengthlevel.com/images/exercises/bench-press/bench-press-400.avif",
  },
  {
    id: 2,
    name: "Squat",
    description: "Fundamental exercise for legs and glutes",
    image:
      "https://static.strengthlevel.com/images/exercises/squat/squat-400.avif  ",
  },
  {
    id: 3,
    name: "Deadlift",
    description: "Complete exercise for back and legs",
    image:
      "https://static.strengthlevel.com/images/exercises/deadlift/deadlift-400.avif",
  },
];

export function ExercisesView() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExercises = exercises.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">
          Exercises
        </h1>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          New
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="space-y-4">
        {filteredExercises.map((exercise) => (
          <Card key={exercise.id} className="overflow-hidden">
            <img
              src={exercise.image || "/placeholder.svg"}
              alt={exercise.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-balance">
                {exercise.name}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {exercise.description}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2 bg-transparent"
                >
                  <Edit2 className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
        {filteredExercises.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No exercises found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}
