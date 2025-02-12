
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">Have a question or feedback? We'd love to hear from you.</p>
        </div>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <Textarea id="message" placeholder="Your message" rows={5} />
          </div>
          
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}
