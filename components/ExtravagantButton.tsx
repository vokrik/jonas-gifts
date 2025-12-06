"use client"

import type React from "react"

import {useEffect, useRef, useState} from "react"
import {Button} from "@components/Button";

interface Particle {
    id: string
    x: number
    y: number
    vx: number
    vy: number
    opacity: number
    scale: number
    text: string
    hue: number
    startTime: number
    duration: number
}

interface ExtravagantButtonProps {
    children?: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function ExtravagantButton({
                                              children = "Zobrazit seznam",
                                              onClick,
                                              className = "",
                                          }: ExtravagantButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [particles, setParticles] = useState<Particle[]>([])
    const [buttonText] = useState(children)
    const startTimeRef = useRef(Date.now())
    const autoEffectsIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const animationFrameRef = useRef<number>()
    const [scale, setScale] = useState(1)
    const [borderRadius, setBorderRadius] = useState(16)
    const [hueRotate, setHueRotate] = useState(0)
    const firedTextMilestonesRef = useRef<Set<number>>(new Set())

    const maxIntensityDuration = 15000 // 15 seconds

    const getIntensity = () => {
        const elapsed = Date.now() - startTimeRef.current
        return Math.min(elapsed / maxIntensityDuration, 1)
    }

    const getElapsedSeconds = () => {
        return (Date.now() - startTimeRef.current) / 1000
    }

    useEffect(() => {
        const animate = () => {
            const now = Date.now()

            setParticles((prevParticles) => {
                return prevParticles
                    .map((particle) => {
                        const elapsed = now - particle.startTime
                        const progress = elapsed / particle.duration

                        if (progress >= 1) return null

                        const gravity = particle.text === "✨" || particle.text === "⭐" || particle.text === "💫" ? 300 : 100
                        const newVy = particle.vy + gravity * 0.016
                        const newX = particle.x + particle.vx * 0.016
                        const newY = particle.y + newVy * 0.016
                        const newOpacity = 1 - progress
                        const newScale = particle.scale * (1 - progress * 0.3)

                        return {
                            ...particle,
                            x: newX,
                            y: newY,
                            vy: newVy,
                            opacity: newOpacity,
                            scale: newScale,
                        }
                    })
                    .filter(Boolean) as Particle[]
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])



    useEffect(() => {
        const updateScale = () => {
            const intensity = getIntensity()

            if (intensity > 0.1) {
                const targetScale = 1 + (Math.random() * 0.3 + 0.1) * intensity
                setScale(targetScale)

                setTimeout(() => setScale(1), 250 + Math.random() * 300)
            }
        }

        const scaleInterval = setInterval(updateScale, 800 - getIntensity() * 200)

        return () => {
            clearInterval(scaleInterval)
        }
    }, [])

    useEffect(() => {
        const updateShape = () => {
            const intensity = getIntensity()

            if (intensity > 0.2) {
                const newRadius = 16 + (Math.random() - 0.5) * intensity * 40
                setBorderRadius(Math.max(4, Math.min(60, newRadius)))

                setTimeout(() => setBorderRadius(16), 250 + Math.random() * 350)
            }
        }

        const shapeInterval = setInterval(updateShape, 900 - getIntensity() * 300)

        return () => {
            clearInterval(shapeInterval)
        }
    }, [])

    useEffect(() => {
        const updateColor = () => {
            const intensity = getIntensity()

            if (intensity > 0.15) {
                const newHue = (Math.random() - 0.5) * intensity * 120
                setHueRotate(newHue)

                setTimeout(() => setHueRotate(0), 300 + Math.random() * 400)
            }
        }

        const colorInterval = setInterval(updateColor, 1000 - getIntensity() * 350)

        return () => {
            clearInterval(colorInterval)
        }
    }, [])


    return (
        <>
            <Button
                variant="contained"
                fullWidth
                ref={buttonRef}
                onClick={onClick}
                className={`relative px-8 py-4 text-lg font-semibold text-white bg-[#4A7FC7] shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-150 ${className}`}
                style={{
                    transform: `scale(${scale})`,
                    filter: `hue-rotate(${hueRotate}deg)`,
                    borderRadius: `${borderRadius}px`,
                }}
            >
                {buttonText}
            </Button>


        </>
    )
}
