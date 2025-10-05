"use client"

import { ProjectCard } from "@/components/Project-Card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectGridProps {
  projects: Project[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ProjectGrid({ projects, currentPage, totalPages, onPageChange }: ProjectGridProps) {
  if (projects.length === 0) return null

  return (
    <div className="space-y-8">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-card border-border hover:bg-secondary disabled:opacity-50"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "secondary"}
                size="sm"
                onClick={() => onPageChange(page)}
                className={`
                  min-w-[2.5rem]
                  ${
                    currentPage === page
                  ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                  : "bg-transparent border-2 border-sky-900/50"
                  }
                `}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-card border-border hover:bg-secondary disabled:opacity-50"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
