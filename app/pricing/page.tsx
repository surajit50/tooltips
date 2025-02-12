
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for personal use",
    features: [
      "Basic PDF tools",
      "QR code generation",
      "Up to 5MB file size",
      "Standard quality"
    ]
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Best for professionals",
    features: [
      "All Free features",
      "Priority processing",
      "Up to 100MB file size",
      "High quality output",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "All Pro features",
      "Unlimited file size",
      "API access",
      "Custom integration",
      "24/7 support"
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="container py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground">Choose the plan that's right for you</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`${plan.popular ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">
                  {plan.price}
                  {plan.period && <span className="text-base font-normal text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
