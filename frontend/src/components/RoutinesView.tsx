import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plus, Clock, Target } from "lucide-react";

const routines = [
  {
    id: 1,
    name: "Total Strength",
    goal: "Build muscle mass",
    duration: "60 min",
    difficulty: "Hard" as const,
  },
  {
    id: 2,
    name: "Intense Cardio",
    goal: "Weight loss",
    duration: "45 min",
    difficulty: "Medium" as const,
  },
  {
    id: 3,
    name: "Beginners",
    goal: "General conditioning",
    duration: "30 min",
    difficulty: "Easy" as const,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-success text-white";
    case "Medium":
      return "bg-warning text-foreground";
    case "Hard":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function RoutinesView() {
  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">
          Routines
        </h1>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Create
        </Button>
      </div>

      <div className="space-y-4">
        {routines.map((routine) => (
          <Card key={routine.id} className="p-5">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-balance">
                {routine.name}
              </h3>
              <Badge className={getDifficultyColor(routine.difficulty)}>
                {routine.difficulty}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>{routine.goal}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{routine.duration}</span>
              </div>
            </div>

            <Button variant="outline" className="mt-4 w-full bg-transparent">
              View details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
