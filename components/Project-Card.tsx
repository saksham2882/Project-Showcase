"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/projects-data"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className={`group h-full flex flex-col bg-gradient-to-br from-purple-900/40 to-blue-900/20 border border-sky-700/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden relative hover:shadow-[0_0_20px_rgba(128,0,255,0.2),0_0_30px_rgba(255,0,128,0.5),0_0_40px_rgba(0,128,255,0.4)]`}
      style={{ animationDelay: `${index * 0.1}s`, willChange: "transform" }}
    >

      {project.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden bg-gray-950">
          <Image
            src={project.imageUrl || "/placeholder.jpg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
      )}

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-200 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-300/80 line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 relative z-10">
        {/* ---------- Tech Stack ------------ */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-sky-300 uppercase tracking-wide">Tech Stack</h3>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={tech}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-800/50 border transition-all duration-300 hover:scale-105 ${
                  idx % 3 === 0
                    ? "text-cyan-400 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_10px_rgba(100,255,255,0.3)]"
                    : idx % 3 === 1
                      ? "text-pink-200/30 border-pink-400/30 hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_10px_rgba(255,100,255,0.2)]"
                      : "text-orange-400 border-orange-500/30 hover:border-orange-400 hover:bg-orange-500/10 hover:shadow-[0_0_10px_rgba(255,150,100,0.3)]"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features (if available) */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-sky-300 uppercase tracking-wide">Key Features</h3>

            <ul className="text-sm text-gray-300/80 space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 group/item">
                  <span
                    className={`mt-1 transition-colors duration-300 ${
                      idx % 3 === 0 ? "text-cyan-400" : idx % 3 === 1 ? "text-pink-400" : "text-orange-400"
                    }`}
                  >
                    •
                  </span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-4 pt-2 border-t border-sky-700/50 relative z-10">
        <Button
          asChild
          variant="default"
          size="sm"
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-400 text-white hover:from-pink-500 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-900/50"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        </Button>

        {project.liveUrl && (
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="flex-1 border border-purple-600 bg-gradient-to-r text-white hover:from-purple-500 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-900/30"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
