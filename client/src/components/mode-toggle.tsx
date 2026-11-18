import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          className="border-neutral-200 bg-white/90 text-neutral-800 hover:text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50/50 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-white dark:hover:text-emerald-400 dark:hover:border-emerald-500/40 dark:hover:bg-neutral-900 transition-colors shadow-2xs"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-lg">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer focus:bg-emerald-50 focus:text-emerald-700 dark:focus:bg-neutral-900 dark:focus:text-emerald-300">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer focus:bg-emerald-50 focus:text-emerald-700 dark:focus:bg-neutral-900 dark:focus:text-emerald-300">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer focus:bg-emerald-50 focus:text-emerald-700 dark:focus:bg-neutral-900 dark:focus:text-emerald-300">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}