"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { submitContactForm, bookConsultation } from "@/app/actions"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState<"contact" | "booking">("contact")

  const handleContactSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBookingSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await bookConsultation(formData)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Error booking consultation:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 dark-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Get
            <span className="block text-primary">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how we can help you make the best automotive
            decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-300">info@autoconsultpro.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Address</div>
                    <div className="text-gray-300">123 Auto Street, Car City, CC 12345</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Business Hours</div>
                    <div className="text-gray-300">Mon-Fri: 9AM-6PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-white border-0 shadow-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span className="font-bold">{"< 2 hours"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Client Satisfaction</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Savings</span>
                    <span className="font-bold">$3,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex mb-8 glass-effect rounded-lg p-1">
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "contact" ? "bg-primary text-white shadow-lg" : "text-gray-300 hover:text-white"
                }`}
              >
                General Contact
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "booking" ? "bg-primary text-white shadow-lg" : "text-gray-300 hover:text-white"
                }`}
              >
                Book Consultation
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === "contact" && (
              <Card className="border-0 dark-card shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    We'll get back to you within 2 hours during business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 group shadow-2xl"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Booking Form */}
            {activeTab === "booking" && (
              <Card className="border-0 dark-card shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Book a Consultation</CardTitle>
                  <CardDescription className="text-gray-300">
                    Schedule a personalized consultation with our experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={handleBookingSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bookingFirstName" className="text-white">
                          First Name
                        </Label>
                        <Input
                          id="bookingFirstName"
                          name="firstName"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bookingLastName" className="text-white">
                          Last Name
                        </Label>
                        <Input
                          id="bookingLastName"
                          name="lastName"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bookingEmail" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="bookingEmail"
                          name="email"
                          type="email"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bookingPhone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="bookingPhone"
                          name="phone"
                          type="tel"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-white">
                        Service Type
                      </Label>
                      <Select name="serviceType" required>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/20">
                          <SelectItem value="buying">Car Buying Consultation</SelectItem>
                          <SelectItem value="selling">Car Selling Advisory</SelectItem>
                          <SelectItem value="maintenance">Maintenance Planning</SelectItem>
                          <SelectItem value="insurance">Insurance Consultation</SelectItem>
                          <SelectItem value="investment">Investment Advisory</SelectItem>
                          <SelectItem value="fleet">Fleet Management</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate" className="text-white">
                          Preferred Date
                        </Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="text-white">
                          Preferred Time
                        </Label>
                        <Select name="preferredTime" required>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white transition-all duration-300 focus:scale-105 focus:border-primary">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-white/20">
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="1pm">1:00 PM</SelectItem>
                            <SelectItem value="2pm">2:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM</SelectItem>
                            <SelectItem value="5pm">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details" className="text-white">
                        Additional Details
                      </Label>
                      <Textarea
                        id="details"
                        name="details"
                        rows={3}
                        placeholder="Tell us about your specific needs..."
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 focus:scale-105 focus:border-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 group shadow-2xl"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Consultation Booked!
                        </>
                      ) : isSubmitting ? (
                        "Booking..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Book Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
