"use client"

import { useState, useMemo, useEffect } from "react"
import { ProjectFilters } from "@/components/Project-Filters"
import { ProjectGrid } from "@/components/Project-Grid"
import { ProjectsGridSkeleton } from "@/components/Skeleton-Loader"
import { projects } from "@/lib/projects-data"

export function ProjectsShowcase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTech, setSelectedTech] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const projectsPerPage = 6

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTech =
        selectedTech === "all" || project.techStack.some((tech) => tech.toLowerCase() === selectedTech.toLowerCase())

      return matchesSearch && matchesTech
    })
  }, [searchQuery, selectedTech])


  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)


  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech)
    setCurrentPage(1)
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Featured <span className="text-gradient"> Projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore my collection of projects, showcasing modern technologies and best practices.
          </p>
        </div>

        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedTech={selectedTech}
          onTechChange={handleTechChange}
          totalProjects={filteredProjects.length}
        />

        {isLoading ? (
          <ProjectsGridSkeleton />
        ) : (
          <ProjectGrid
            projects={paginatedProjects}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground mb-2">No projects found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}
