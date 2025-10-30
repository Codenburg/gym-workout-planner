import { Card, Badge, Button } from "../ui";
import { Plus, Clock, Target, Search } from "lucide-react";
import { useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoutines = routines.filter(
    (routine) =>
      routine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      routine.goal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      routine.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search routines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="space-y-4">
        {filteredRoutines.map((routine) => (
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
        {filteredRoutines.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No routines found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}
