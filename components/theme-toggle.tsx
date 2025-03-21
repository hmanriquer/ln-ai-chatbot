'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      className="size-8 rounded-full p-0"
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
