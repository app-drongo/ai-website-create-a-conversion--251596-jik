// Features Component
// Generated: 2025-08-30T11:44:11.431Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Bot, 
  Globe, 
  BarChart3, 
  TestTube,
  Code2,
  Headphones,
  Target
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Testing",
      description: "Intelligent test generation and maintenance with machine learning algorithms that adapt to your codebase.",
      badge: "AI/ML"
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Comprehensive vulnerability scanning and penetration testing to ensure your applications are secure.",
      badge: "Security"
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Parallel test execution across multiple environments with sub-minute feedback loops.",
      badge: "Performance"
    },
    {
      icon: Globe,
      title: "Cross-Platform Coverage",
      description: "Test across web, mobile, API, and desktop applications from a single unified platform.",
      badge: "Coverage"
    },
    {
      icon: BarChart3,
      title: "Advanced Test Analytics",
      description: "Deep insights into test performance, coverage metrics, and quality trends with actionable reports.",
      badge: "Analytics"
    },
    {
      icon: TestTube,
      title: "Smart Test Management",
      description: "Organize, prioritize, and track test cases with intelligent categorization and risk assessment.",
      badge: "Management"
    },
    {
      icon: Code2,
      title: "Developer Integration",
      description: "Seamless CI/CD integration with popular tools like Jenkins, GitHub Actions, and Azure DevOps.",
      badge: "DevOps"
    },
    {
      icon: Headphones,
      title: "Expert QA Support",
      description: "24/7 access to testing experts and dedicated customer success managers for enterprise clients.",
      badge: "Support"
    },
    {
      icon: Target,
      title: "Precision Testing",
      description: "Smart test selection and risk-based testing to focus on critical paths and high-impact areas.",
      badge: "Optimization"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            TestPro Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Testing Solution for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Development Teams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From automated test generation to comprehensive reporting, TestPro provides everything 
            you need to deliver high-quality software with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your testing process?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request Demo
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}