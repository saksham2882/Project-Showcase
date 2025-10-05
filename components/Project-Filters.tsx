"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const techOptions = [
  "all",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Socket.io",
  "Python",
  "MySQL",
]

interface ProjectFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTech: string
  onTechChange: (tech: string) => void
  totalProjects: number
}

export function ProjectFilters({
  searchQuery,
  onSearchChange,
  selectedTech,
  onTechChange,
  totalProjects,
}: ProjectFiltersProps) {
  return (
    <div className="mb-8 md:mb-12 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        
        <Input
          type="search"
          placeholder="Search projects by name or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-purple-300"
          aria-label="Search projects"
        />
      </div>

      {/* Tech Stack Filters */}
      <div className="space-y-3">
        
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Filter by Technology</h2>

          <span className="text-sm text-muted-foreground">
            {totalProjects} {totalProjects === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {techOptions.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? "default" : "secondary"}
              size="sm"
              onClick={() => onTechChange(tech)}
              className={`
                transition-all duration-200
                ${
                  selectedTech === tech
                    ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                    : "bg-transparent border-2 border-sky-900/50"
                }
              `}
            >
              {tech === "all" ? "All Projects" : tech}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
