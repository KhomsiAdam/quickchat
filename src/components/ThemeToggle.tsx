"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/ButtonAlt"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    if (theme === 'light') setTheme('dark');
  }
  return (
    <Button variant="outline" size="icon" className='absolute right-8 top-4' onClick={toggleTheme}>
      {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />}
      {theme === 'dark' && <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
