'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Sidebar } from '@/components/sidebar';

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('about');

  const sections = [
    'about',
    'skills',
    'projects',
    'education',
    'certifications',
  ];

  // Handle mounting separately from scroll effects
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Early return with loading state
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-background/30 dark:bg-background/50 backdrop-blur-xl border-b border-border/40">
        <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-6">
              {sections.map((section) => (
                <button
                  key={section}
                  className="px-3 py-2 text-sm capitalize rounded-md transition-colors text-muted-foreground"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <div className="p-2 rounded-md text-muted-foreground">
            <MoonIcon className="h-5 w-5" />
          </div>
        </nav>
      </header>
    );
  }

  // Get the correct icon based on the resolved theme
  const ThemeIcon = resolvedTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <header className="sticky top-0 z-50 bg-background/30 dark:bg-background/50 backdrop-blur-xl border-b border-border/40">
      <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-2 text-sm capitalize rounded-md transition-colors ${
                  activeSection === section
                    ? 'text-foreground font-medium bg-background/50 dark:text-foreground dark:bg-background/70'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:text-foreground dark:hover:bg-background/70'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:text-foreground dark:hover:bg-background/70 transition-colors"
        >
          <ThemeIcon className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
