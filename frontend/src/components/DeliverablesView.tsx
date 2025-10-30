import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plus, FileText, Globe, QrCodeIcon, Search } from "lucide-react";
import { useState } from "react";

const deliverables = [
  {
    id: 1,
    name: "Strength Routine - John Doe",
    type: "PDF" as const,
    status: "Active" as const,
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    name: "Cardio Plan - Mary Smith",
    type: "Web" as const,
    status: "Active" as const,
    date: "Jan 12, 2025",
  },
  {
    id: 3,
    name: "Basic Routine - Carlos Lopez",
    type: "PDF" as const,
    status: "Expired" as const,
    date: "Jan 05, 2025",
  },
];

export function DeliverablesView() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDeliverables = deliverables.filter(
    (deliverable) =>
      deliverable.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deliverable.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deliverable.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">
          QR / Deliverables
        </h1>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Generate
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search deliverables..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="space-y-4">
        {filteredDeliverables.map((deliverable) => (
          <Card key={deliverable.id} className="p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="mb-2 font-semibold leading-tight text-balance">
                  {deliverable.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {deliverable.date}
                </p>
              </div>
              <Badge
                variant={
                  deliverable.status === "Active" ? "default" : "secondary"
                }
                className={
                  deliverable.status === "Active"
                    ? "bg-success text-white"
                    : "bg-muted text-muted-foreground"
                }
              >
                {deliverable.status}
              </Badge>
            </div>

            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              {deliverable.type === "PDF" ? (
                <FileText className="h-4 w-4" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              <span>Delivery: {deliverable.type}</span>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 gap-2 bg-transparent"
              >
                <QrCodeIcon className="h-4 w-4" />
                View QR
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent"
              >
                Share
              </Button>
            </div>
          </Card>
        ))}
        {filteredDeliverables.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No deliverables found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}
