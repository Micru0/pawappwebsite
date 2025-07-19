"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dog,
  Brain,
  Users,
  Award,
  Clock,
  Star,
  Search,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react"

export default function TrainingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const trainingServices = [
    {
      id: 1,
      title: "Basic Obedience Training",
      category: "Obedience",
      description: "Foundation training for puppies and adult dogs including sit, stay, come, and leash walking.",
      duration: "6-8 weeks",
      sessions: "1 hour/week",
      price: "KD 150-200",
      ageGroup: "8 weeks+",
      groupSize: "Max 6 dogs",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Puppy Socialization Classes",
      category: "Socialization",
      description: "Early socialization for puppies to build confidence and proper interaction with other dogs and people.",
      duration: "4-6 weeks",
      sessions: "45 minutes/week",
      price: "KD 120-160",
      ageGroup: "8-16 weeks",
      groupSize: "Max 5 puppies",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Behavior Modification",
      category: "Behavior",
      description: "Address specific behavioral issues like aggression, anxiety, excessive barking, or destructive behavior.",
      duration: "Varies",
      sessions: "1-2 hours/session",
      price: "KD 80-120/session",
      ageGroup: "All ages",
      groupSize: "1-on-1 or small group",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      title: "Advanced Training & Tricks",
      category: "Advanced",
      description: "Complex commands, tricks, and skills for well-trained dogs looking to advance their abilities.",
      duration: "4-6 weeks",
      sessions: "1 hour/week",
      price: "KD 180-250",
      ageGroup: "6 months+",
      groupSize: "Max 4 dogs",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 5,
      title: "Therapy Dog Preparation",
      category: "Specialized",
      description: "Specialized training for dogs intended to become therapy or service animals.",
      duration: "12-16 weeks",
      sessions: "2 hours/week",
      price: "KD 400-600",
      ageGroup: "1 year+",
      groupSize: "Max 3 dogs",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      title: "In-Home Private Training",
      category: "Private",
      description: "Personalized one-on-one training sessions in the comfort of your home environment.",
      duration: "Flexible",
      sessions: "1-2 hours/session",
      price: "KD 100-150/session",
      ageGroup: "All ages",
      groupSize: "1-on-1",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  const trainers = [
    {
      id: 1,
      name: "Sarah Al-Ahmad",
      specialization: "Behavior Modification",
      experience: "8 years",
      certifications: ["CCPDT-KA", "Fear Free Certified"],
      languages: ["Arabic", "English"],
      rating: 4.9,
      reviews: 127,
      bio: "Specialized in aggressive and anxious dogs with gentle, positive reinforcement methods."
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      specialization: "Puppy Training",
      experience: "6 years",
      certifications: ["KPA-CTP", "AKC CGC Evaluator"],
      languages: ["Arabic", "English"],
      rating: 4.8,
      reviews: 94,
      bio: "Expert in early puppy development and socialization with focus on building confidence."
    },
    {
      id: 3,
      name: "Dr. Fatima Al-Rashid",
      specialization: "Advanced Training",
      experience: "12 years",
      certifications: ["PhD Animal Behavior", "IAABC Associate"],
      languages: ["Arabic", "English", "French"],
      rating: 4.9,
      reviews: 156,
      bio: "Veterinary behaviorist with expertise in complex training and therapy dog preparation."
    }
  ];

  const categories = ["All Categories", "Obedience", "Socialization", "Behavior", "Advanced", "Specialized", "Private"];

  const filteredServices = trainingServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-navy-800 text-white min-h-screen">
      {/* Header */}
      <header className="bg-navy-900 py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium hover:text-paw-yellow">Home</a>
            <a href="/#features" className="text-sm font-medium hover:text-paw-yellow">Features</a>
            <a href="/#services" className="text-sm font-medium hover:text-paw-yellow">Services</a>
            <a href="/clinics" className="text-sm font-medium hover:text-paw-yellow">Clinics</a>
            <a href="/health" className="text-sm font-medium hover:text-paw-yellow">Health Center</a>
            <a href="/blog" className="text-sm font-medium hover:text-paw-yellow">Blog</a>
            <a href="/contact" className="text-sm font-medium hover:text-paw-yellow">Contact</a>
            <a href="/training" className="text-sm font-medium text-paw-yellow">Training</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-navy-900 to-navy-700">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Pet Training & Behaviour
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert trainers for obedience, behavior modification, and specialized training. 
            Book sessions directly through PawApp with certified professionals in Kuwait.
          </p>
          
          {/* Quick Booking CTA */}
          <div className="bg-paw-yellow text-navy-900 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-2">🎯 Book Your First Session</h3>
            <p className="mb-4">Start your pet's training journey with a professional assessment</p>
            <Button className="bg-navy-900 text-paw-yellow hover:bg-navy-800">
              Book Assessment Session
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-navy-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search training programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-navy-600 border-navy-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-navy-600 border border-navy-500 text-white px-4 py-2 rounded-lg"
            >
              {categories.map((category) => (
                <option key={category} value={category === "All Categories" ? "all" : category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center mt-4 text-gray-300">
            Found {filteredServices.length} training programs
          </div>
        </div>
      </section>

      {/* Training Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-paw-yellow">
            Training Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-navy-700 border-navy-600 hover:bg-navy-600 transition-colors">
                <CardContent className="p-6">
                  {/* Service Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="bg-paw-yellow text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold mb-3 text-paw-yellow">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <Clock className="inline w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-300">{service.duration}</span>
                    </div>
                    <div>
                      <Users className="inline w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-300">{service.groupSize}</span>
                    </div>
                    <div>
                      <Calendar className="inline w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-300">{service.sessions}</span>
                    </div>
                    <div>
                      <Dog className="inline w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-300">{service.ageGroup}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-paw-yellow">{service.price}</span>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-paw-yellow text-navy-900 hover:bg-yellow-400">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Trainers */}
      <section className="py-16 px-4 bg-navy-700">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-paw-yellow">
            Our Professional Trainers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="bg-navy-600 border-navy-500">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-navy-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-paw-yellow" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-paw-yellow">{trainer.name}</h3>
                  
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(trainer.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-300">
                      {trainer.rating} ({trainer.reviews} reviews)
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-2"><strong>Specialization:</strong> {trainer.specialization}</p>
                  <p className="text-gray-300 mb-2"><strong>Experience:</strong> {trainer.experience}</p>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-400 mb-1"><strong>Languages:</strong></p>
                    <div className="flex justify-center gap-2">
                      {trainer.languages.map((lang, index) => (
                        <span key={index} className="bg-navy-700 text-xs px-2 py-1 rounded text-gray-300">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">{trainer.bio}</p>
                  
                  <Button className="w-full bg-paw-yellow text-navy-900 hover:bg-yellow-400">
                    Book with {trainer.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-paw-yellow">
            Training Tips & Resources
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-700 rounded-lg p-6 text-center">
              <Brain className="w-12 h-12 text-paw-yellow mx-auto mb-4" />
              <h3 className="font-bold mb-2">Positive Reinforcement</h3>
              <p className="text-sm text-gray-300">Reward good behavior immediately for best results</p>
            </div>
            
            <div className="bg-navy-700 rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 text-paw-yellow mx-auto mb-4" />
              <h3 className="font-bold mb-2">Consistency is Key</h3>
              <p className="text-sm text-gray-300">Practice daily, even if just for 5-10 minutes</p>
            </div>
            
            <div className="bg-navy-700 rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-paw-yellow mx-auto mb-4" />
              <h3 className="font-bold mb-2">Socialization</h3>
              <p className="text-sm text-gray-300">Early and ongoing socialization prevents behavioral issues</p>
            </div>
            
            <div className="bg-navy-700 rounded-lg p-6 text-center">
              <Award className="w-12 h-12 text-paw-yellow mx-auto mb-4" />
              <h3 className="font-bold mb-2">Professional Help</h3>
              <p className="text-sm text-gray-300">Don't hesitate to seek expert guidance when needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Training Sessions Through PawApp
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find certified trainers, book sessions, track progress, and manage your pet's 
            training schedule all in one convenient app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/app/pawapp" 
              className="bg-paw-yellow text-navy-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              📱 Download for iOS
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.pawapp" 
              className="border-2 border-paw-yellow text-paw-yellow px-8 py-4 rounded-lg font-bold hover:bg-paw-yellow hover:text-navy-900 transition-colors flex items-center justify-center gap-2"
            >
              🤖 Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/images/paw-app-logo.png" alt="Pawapp Logo" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">
                Professional pet training and behavior modification services across Kuwait.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Training Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/training?category=Obedience" className="hover:text-white">Basic Obedience</a></li>
                <li><a href="/training?category=Behavior" className="hover:text-white">Behavior Modification</a></li>
                <li><a href="/training?category=Socialization" className="hover:text-white">Puppy Socialization</a></li>
                <li><a href="/training?category=Private" className="hover:text-white">Private Sessions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/health" className="hover:text-white">Health Center</a></li>
                <li><a href="/clinics" className="hover:text-white">Find Clinics</a></li>
                <li><a href="/blog" className="hover:text-white">Pet Care Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +965 2XXX XXXX</li>
                <li>📧 training@pawapp.com</li>
                <li>📍 Kuwait City, Kuwait</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-navy-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PawApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}