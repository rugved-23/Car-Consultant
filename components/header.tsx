"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-2xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            AutoConsult Pro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-sm font-medium text-white hover:text-primary transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-white hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-white hover:text-primary transition-colors duration-200"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-white hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
          <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-slate-900 border-white/10">
            <div className="flex flex-col space-y-6 mt-8">
              <Link href="#services" className="text-lg font-medium text-white hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-lg font-medium text-white hover:text-primary transition-colors">
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-medium text-white hover:text-primary transition-colors"
              >
                Reviews
              </Link>
              <Link href="#contact" className="text-lg font-medium text-white hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-primary to-blue-600 shadow-lg">Book Consultation</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
