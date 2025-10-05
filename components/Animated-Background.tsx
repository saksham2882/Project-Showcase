"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    let time = 0
    let animationId: number

    // Particle system for floating particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      hue: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        hue: [180, 320, 30, 270][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      time += 0.008

      // Create animated gradient background with wave effect
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height + Math.sin(time) * 100)
      gradient1.addColorStop(0, `hsl(${250 + Math.sin(time) * 20}, 70%, 10%)`)
      gradient1.addColorStop(0.5, `hsl(${280 + Math.cos(time) * 20}, 60%, 8%)`)
      gradient1.addColorStop(1, `hsl(${220 + Math.sin(time * 0.5) * 20}, 80%, 6%)`)

      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated gradient orbs with infinite movement
      const drawOrb = (
        baseX: number,
        baseY: number,
        radius: number,
        hue: number,
        opacity: number,
        speed: number,
        offset: number,
      ) => {
        const x = baseX + Math.sin(time * speed + offset) * 150
        const y = baseY + Math.cos(time * speed * 0.7 + offset) * 120

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `hsla(${hue + Math.sin(time) * 10}, 100%, 60%, ${opacity})`)
        gradient.addColorStop(0.5, `hsla(${hue}, 100%, 50%, ${opacity * 0.5})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Multiple animated orbs with different speeds and patterns
      drawOrb(canvas.width * 0.2, canvas.height * 0.3, 300, 180, 0.15, 0.5, 0)
      drawOrb(canvas.width * 0.8, canvas.height * 0.4, 350, 320, 0.12, 0.4, Math.PI)
      drawOrb(canvas.width * 0.5, canvas.height * 0.7, 280, 30, 0.1, 0.6, Math.PI / 2)
      drawOrb(canvas.width * 0.7, canvas.height * 0.2, 250, 270, 0.13, 0.3, Math.PI * 1.5)
      drawOrb(canvas.width * 0.3, canvas.height * 0.6, 200, 200, 0.08, 0.7, Math.PI / 4)

      // Draw animated grid pattern with wave effect
      ctx.strokeStyle = `rgba(100, 255, 255, ${0.03 + Math.sin(time) * 0.02})`
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        for (let y = 0; y < canvas.height; y += 10) {
          const offset = Math.sin(time + x * 0.01 + y * 0.01) * 5
          ctx.lineTo(x + offset, y)
        }
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        for (let x = 0; x < canvas.width; x += 10) {
          const offset = Math.cos(time + x * 0.01 + y * 0.01) * 5
          ctx.lineTo(x, y + offset)
        }
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulsing opacity
        const pulseOpacity = particle.opacity + Math.sin(time * 2 + particle.x) * 0.2

        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${pulseOpacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3,
        )
        glowGradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${pulseOpacity * 0.5})`)
        glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = "rgba(100, 255, 255, 0.1)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, willChange: "transform" }}
    />
  )
}
