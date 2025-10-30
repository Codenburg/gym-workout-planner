import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { User, Bell, Lock, HelpCircle, LogOut, ChevronRight } from "lucide-react"

const options = [
  {
    id: 1,
    title: "Profile",
    description: "Edit your personal information",
    icon: User,
  },
  {
    id: 2,
    title: "Notifications",
    description: "Manage your alerts",
    icon: Bell,
  },
  {
    id: 3,
    title: "Privacy",
    description: "Control your security",
    icon: Lock,
  },
  {
    id: 4,
    title: "Help",
    description: "Support center",
    icon: HelpCircle,
  },
]

export function SettingsView() {
  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">Settings</h1>
      </div>

      <div className="mb-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Pro Trainer</h3>
              <p className="text-sm text-muted-foreground">trainer@fitness.com</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        {options.map((option) => {
          const Icon = option.icon
          return (
            <Card key={option.id} className="cursor-pointer transition-colors hover:bg-accent">
              <button className="flex w-full items-center gap-4 p-4 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </Card>
          )
        })}
      </div>

      <div className="mt-6">
        <Button
          variant="outline"
          className="w-full gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}
