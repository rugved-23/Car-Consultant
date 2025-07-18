"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Business Owner",
    content:
      "AutoConsult Pro helped me find the perfect fleet vehicles for my delivery business. Their expertise saved me thousands and the ongoing support is exceptional.",
    rating: 5,
    image: "/images/client-1.jpg",
  },
  {
    name: "Robert Thompson",
    role: "Car Enthusiast",
    content:
      "I was looking for a classic car investment and their team provided invaluable market insights. The ROI has exceeded my expectations!",
    rating: 5,
    image: "/images/client-2.jpg",
  },
  {
    name: "Lisa Chen",
    role: "First-time Buyer",
    content:
      "As a first-time car buyer, I was overwhelmed. Their patient guidance and transparent process made everything so much easier. Highly recommend!",
    rating: 5,
    image: "/images/client-3.jpg",
  },
  {
    name: "Mark Williams",
    role: "Fleet Manager",
    content:
      "Managing our company's 50+ vehicle fleet became effortless with their consultation. The cost savings and efficiency improvements are remarkable.",
    rating: 5,
    image: "/images/client-4.jpg",
  },
  {
    name: "Amanda Davis",
    role: "Luxury Car Owner",
    content:
      "Selling my luxury vehicle through their advisory service was seamless. They got me 15% more than I expected and handled everything professionally.",
    rating: 5,
    image: "/images/client-5.jpg",
  },
  {
    name: "James Wilson",
    role: "Small Business Owner",
    content:
      "Their maintenance planning service has kept our delivery trucks running smoothly and reduced our repair costs by 30%. Outstanding service!",
    rating: 5,
    image: "/images/client-6.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3
    return testimonials.slice(start, start + 3)
  }

  return (
    <section id="testimonials" className="py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary">
            Client Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            AutoConsult Pro.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid md:grid-cols-3 gap-8 transition-all duration-500">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 dark-card animate-fade-in hover:shadow-primary/20"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
