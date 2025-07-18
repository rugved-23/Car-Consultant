import Link from "next/link"
import { Car, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                AutoConsult Pro
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Your trusted automotive consulting partner. We help you make informed decisions about buying, selling, and
              maintaining your vehicles with expert guidance and personalized service.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Car Buying Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Car Selling Advisory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Maintenance Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Insurance Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Fleet Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@autoconsultpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300">123 Auto Street, Car City, CC 12345</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="text-sm text-gray-300">Get automotive tips and updates</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AutoConsult Pro. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
