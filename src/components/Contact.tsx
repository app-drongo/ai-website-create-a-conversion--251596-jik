"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones,
  Shield,
  Zap,
  Building2
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    testingNeeds: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactTiers = [
    {
      icon: Users,
      title: "Basic Support",
      description: "Essential testing guidance",
      contact: "support@testpro.com",
      action: "Contact Basic Support",
      features: ["Email support", "Documentation access", "Community forum"],
      responseTime: "48 hours"
    },
    {
      icon: Zap,
      title: "Pro Consultation",
      description: "Advanced testing strategies",
      contact: "pro@testpro.com",
      action: "Schedule Pro Consultation",
      features: ["Priority email & chat", "Video consultations", "Custom test plans"],
      responseTime: "24 hours"
    },
    {
      icon: Shield,
      title: "Enterprise Partnership",
      description: "Dedicated testing solutions",
      contact: "enterprise@testpro.com",
      action: "Request Enterprise Demo",
      features: ["Dedicated account manager", "24/7 phone support", "On-site training"],
      responseTime: "4 hours"
    }
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "456 Testing Hub, Suite 200",
      timezone: "PST (UTC-8)",
      focus: "QA Innovation Center"
    },
    {
      city: "Austin",
      address: "789 DevOps Plaza, Floor 12",
      timezone: "CST (UTC-6)",
      focus: "Automation Excellence"
    },
    {
      city: "Boston",
      address: "321 Tech Square, Building C",
      timezone: "EST (UTC-5)",
      focus: "Enterprise Solutions"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <MessageSquare className="size-3 mr-2" />
            Contact TestPro
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Testing Strategy?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with our testing experts to discover how TestPro can streamline your QA processes 
            and accelerate your development cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Get Your Testing Assessment
              </CardTitle>
              <CardDescription>
                Tell us about your testing challenges and we'll provide a customized solution within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="testingNeeds" className="block text-sm font-medium mb-2">
                    Testing Requirements *
                  </label>
                  <select
                    id="testingNeeds"
                    name="testingNeeds"
                    value={formData.testingNeeds}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select your primary need</option>
                    <option value="automation">Test Automation</option>
                    <option value="performance">Performance Testing</option>
                    <option value="security">Security Testing</option>
                    <option value="mobile">Mobile App Testing</option>
                    <option value="api">API Testing</option>
                    <option value="ci-cd">CI/CD Integration</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your current testing challenges, team size, and what you're hoping to achieve..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Request Testing Assessment
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Tiers */}
          <div className="space-y-8">
            {/* Support Tiers */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Choose Your Support Level
              </h3>
              <div className="grid gap-4">
                {contactTiers.map((tier, index) => {
                  const Icon = tier.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{tier.title}</h4>
                              <Badge variant="secondary" className="text-xs">
                                {tier.responseTime}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                            <div className="space-y-1 mb-3">
                              {tier.features.map((feature, idx) => (
                                <p key={idx} className="text-xs text-muted-foreground">• {feature}</p>
                              ))}
                            </div>
                            <p className="font-medium text-primary text-sm">{tier.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="size-5 text-primary" />
                TestPro Locations
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <p className="text-xs text-primary font-medium">{office.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Emergency only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    24/7 critical issue support for Enterprise clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}