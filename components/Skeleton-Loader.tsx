import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function ProjectCardSkeleton() {
  return (
    <Card className="h-full flex flex-col border-border overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="relative w-full h-48 bg-muted" />

      <CardHeader>
        {/* Title skeleton */}
        <div className="h-6 bg-muted rounded-md w-3/4 mb-2" />
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md w-full" />
          <div className="h-4 bg-muted rounded-md w-5/6" />
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Tech Stack skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded-md w-20" />
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-muted rounded-md w-16" />
            <div className="h-6 bg-muted rounded-md w-20" />
            <div className="h-6 bg-muted rounded-md w-24" />
          </div>
        </div>

        {/* Features skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded-md w-24" />
          <div className="space-y-1">
            <div className="h-4 bg-muted rounded-md w-full" />
            <div className="h-4 bg-muted rounded-md w-4/5" />
            <div className="h-4 bg-muted rounded-md w-5/6" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-4 border-t border-border">
        <div className="h-9 bg-muted rounded-md flex-1" />
        <div className="h-9 bg-muted rounded-md flex-1" />
      </CardFooter>
    </Card>
  )
}

export function ProjectsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  )
}
