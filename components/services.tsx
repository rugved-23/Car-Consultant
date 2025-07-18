"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Search, DollarSign, Wrench, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Search,
    title: "Car Buying Consultation",
    description: "Expert guidance to find the perfect vehicle within your budget and requirements.",
    features: ["Market Research", "Price Negotiation", "Inspection Service", "Financing Options"],
    price: "From $199",
  },
  {
    icon: DollarSign,
    title: "Car Selling Advisory",
    description: "Maximize your car's value with our professional selling strategies.",
    features: ["Market Valuation", "Listing Optimization", "Buyer Screening", "Negotiation Support"],
    price: "From $149",
  },
  {
    icon: Wrench,
    title: "Maintenance Planning",
    description: "Keep your car in perfect condition with our maintenance scheduling service.",
    features: ["Service Scheduling", "Cost Estimation", "Mechanic Recommendations", "Warranty Tracking"],
    price: "From $99",
  },
  {
    icon: Shield,
    title: "Insurance Consultation",
    description: "Find the best insurance coverage for your vehicle and driving needs.",
    features: ["Policy Comparison", "Coverage Analysis", "Claims Assistance", "Premium Optimization"],
    price: "From $79",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Make smart decisions about classic and luxury car investments.",
    features: ["Market Analysis", "Investment Strategy", "Portfolio Management", "Exit Planning"],
    price: "From $299",
  },
  {
    icon: Car,
    title: "Fleet Management",
    description: "Comprehensive fleet management solutions for businesses.",
    features: ["Fleet Optimization", "Cost Management", "Maintenance Scheduling", "Driver Training"],
    price: "Custom Quote",
  },
]

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Complete Car Consulting
            <span className="block text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From buying your first car to managing a fleet, we provide expert guidance at every step of your automotive
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 dark-card ${
                hoveredCard === index ? "scale-105 shadow-2xl shadow-primary/20" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="space-y-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    hoveredCard === index ? "animate-pulse shadow-primary/50" : ""
                  }`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2 text-gray-300">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-ping"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
