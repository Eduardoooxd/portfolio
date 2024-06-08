'use client';
import { useThemeContext } from '@/context/theme-context';
import { MoonStar, SunMedium } from 'lucide-react';
import { Button } from './shared/button';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-5 right-5 h-[3rem] w-[3rem] rounded-full shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.05] active:scale-95"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MoonStar /> : <SunMedium />}
    </Button>
  );
}
