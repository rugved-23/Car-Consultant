"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = ["/images/hero-car-1.jpg", "/images/hero-car-2.jpg", "/images/hero-car-3.jpg"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Background with Real Image */}
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.jpg" alt="Car background" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce delay-1000 glass-effect"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce delay-2000 glass-effect"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-purple-500/20 rounded-full animate-bounce glass-effect"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                #1 Car Consulting Service
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Perfect Car
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Expert guidance for buying, selling, and maintaining your vehicle. Save time, money, and make informed
                decisions with our professional consulting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 group shadow-2xl"
              >
                Start Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 glass-effect bg-transparent shadow-lg"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl glass-effect">
              {slides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide || "/placeholder.svg"}
                  alt={`Luxury car ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary scale-125 shadow-lg" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
