"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Target } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const achievements = [
  { icon: Users, label: "500+ Clients", value: "500+" },
  { icon: Clock, label: "15 Years", value: "15+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Target, label: "Success Rate", value: "98%" },
]

const team = [
  {
    name: "Michael Rodriguez",
    role: "Senior Car Consultant",
    experience: "12 years",
    speciality: "Luxury & Sports Cars",
    image: "/images/consultant-1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Fleet Management Expert",
    experience: "10 years",
    speciality: "Commercial Vehicles",
    image: "/images/consultant-2.jpg",
  },
  {
    name: "David Chen",
    role: "Investment Advisor",
    experience: "8 years",
    speciality: "Classic Cars",
    image: "/images/consultant-3.jpg",
  },
]

export function About() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 dark-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary glass-effect">
                About AutoConsult Pro
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Your Trusted
                <span className="block text-primary">Automotive Partner</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 15 years of experience in the automotive industry, we've helped thousands of clients make
                informed decisions about their vehicles. Our team of certified experts combines deep market knowledge
                with personalized service to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 dark-card"
                >
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-primary group-hover:animate-pulse">{achievement.value}</div>
                    <div className="text-sm text-gray-300">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl glass-effect">
              <Image src="/images/about-office.jpg" alt="Our Office" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-bounce delay-1000 glass-effect"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce delay-2000 glass-effect"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-white">Meet Our Expert Team</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our certified consultants bring decades of combined experience to help you make the best automotive
            decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 dark-card ${
                hoveredMember === index ? "scale-105 shadow-primary/20" : ""
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-gray-300">{member.experience} experience</p>
                  <Badge variant="secondary" className="mt-2 glass-effect">
                    {member.speciality}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
