import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Paw, Stethoscope, ShoppingBag, Calendar, MessageCircle, Menu } from "lucide-react"
import Link from "next/link"

export default function PawappLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Paw className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Pawapp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Your Pet's Health, In Your Hands
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Connect with vets, book services, and manage your pet's care all in one place.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary">Download App</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Stethoscope className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Vet Consultations</h3>
                <p className="text-muted-foreground">Connect with licensed veterinarians for online consultations.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShoppingBag className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Pet Services Marketplace</h3>
                <p className="text-muted-foreground">Find and book grooming, walking, and other pet services.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Appointment Scheduling</h3>
                <p className="text-muted-foreground">Easily schedule and manage vet appointments and pet services.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Connect with Vets Anytime, Anywhere</h2>
                <p className="text-muted-foreground">
                  Get expert advice from licensed veterinarians through video calls, chat, or voice calls. Our platform
                  ensures your pet receives the care they need, when they need it.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Vet consultation"
                  className="rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pet Services at Your Fingertips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <img
                  alt="Grooming"
                  className="rounded-full object-cover mb-4"
                  height="100"
                  src="/placeholder.svg?height=100&width=100"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold mb-2">Grooming</h3>
                <p className="text-muted-foreground">Professional grooming services for all pet types.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <img
                  alt="Dog Walking"
                  className="rounded-full object-cover mb-4"
                  height="100"
                  src="/placeholder.svg?height=100&width=100"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold mb-2">Dog Walking</h3>
                <p className="text-muted-foreground">Reliable dog walking services in your area.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <img
                  alt="Pet Sitting"
                  className="rounded-full object-cover mb-4"
                  height="100"
                  src="/placeholder.svg?height=100&width=100"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold mb-2">Pet Sitting</h3>
                <p className="text-muted-foreground">Trustworthy pet sitters for when you're away.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Download Pawapp Today
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of pet owners who trust Pawapp for their pet care needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Enter your email" type="email" />
                  <Button type="submit" variant="secondary">
                    Get App
                  </Button>
                </form>
                <p className="text-xs text-white">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Pawapp. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
