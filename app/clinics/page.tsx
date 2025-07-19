"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Search,
  Filter,
  Stethoscope,
  Scissors,
  Heart,
  Shield,
  Navigation,
} from "lucide-react"

export default function ClinicsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  const clinics = [
    {
      id: 1,
      name: "Kuwait Veterinary Center",
      area: "Salmiya",
      address: "Salem Al-Mubarak Street, Salmiya",
      phone: "+965 2573 4567",
      rating: 4.8,
      reviews: 124,
      specialties: ["General Practice", "Surgery", "Emergency Care"],
      hours: "24/7 Emergency | 8 AM - 10 PM Regular",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      emergency: true
    },
    {
      id: 2,
      name: "Mishref Animal Hospital",
      area: "Mishref",
      address: "Block 5, Street 3, Mishref",
      phone: "+965 2539 8912",
      rating: 4.7,
      reviews: 89,
      specialties: ["General Practice", "Dental Care", "Grooming"],
      hours: "7 AM - 11 PM Daily",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      emergency: false
    },
    {
      id: 3,
      name: "Jabriya Pet Clinic",
      area: "Jabriya",
      address: "Block 1A, Jabriya",
      phone: "+965 2531 2345",
      rating: 4.6,
      reviews: 67,
      specialties: ["General Practice", "Vaccination", "Microchipping"],
      hours: "9 AM - 9 PM (Closed Fridays)",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      emergency: false
    },
    {
      id: 4,
      name: "Hawalli Veterinary Clinic",
      area: "Hawalli",
      address: "Tunis Street, Hawalli",
      phone: "+965 2562 7890",
      rating: 4.5,
      reviews: 156,
      specialties: ["General Practice", "Laboratory Services", "X-Ray"],
      hours: "8 AM - 8 PM Daily",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      emergency: false
    },
    {
      id: 5,
      name: "Fintas Animal Care",
      area: "Fintas",
      address: "Block 4, Fintas",
      phone: "+965 2371 5678",
      rating: 4.9,
      reviews: 203,
      specialties: ["Surgery", "Cardiology", "Dermatology"],
      hours: "24/7 Emergency | 7 AM - 11 PM Regular",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      emergency: true
    },
    {
      id: 6,
      name: "Kuwait City Pet Hospital",
      area: "Kuwait City",
      address: "Abdullah Al-Mubarak Street",
      phone: "+965 2245 3456",
      rating: 4.4,
      reviews: 98,
      specialties: ["General Practice", "Boarding", "Grooming"],
      hours: "6 AM - 12 AM Daily",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      emergency: false
    }
  ];

  const areas = ["All Areas", "Salmiya", "Mishref", "Jabriya", "Hawalli", "Fintas", "Kuwait City", "Ahmadi", "Farwaniya"];
  const specialties = ["All Specialties", "General Practice", "Surgery", "Emergency Care", "Dental Care", "Grooming", "Laboratory Services"];

  const filteredClinics = clinics.filter(clinic => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clinic.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === "all" || clinic.area === selectedArea;
    const matchesSpecialty = selectedSpecialty === "all" || 
                            clinic.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));
    
    return matchesSearch && matchesArea && matchesSpecialty;
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
            <a href="/health" className="text-sm font-medium hover:text-paw-yellow">Health Center</a>
            <a href="/blog" className="text-sm font-medium hover:text-paw-yellow">Blog</a>
            <a href="/contact" className="text-sm font-medium hover:text-paw-yellow">Contact</a>
            <a href="/clinics" className="text-sm font-medium text-paw-yellow">Find Clinics</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-navy-900 to-navy-700">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Trusted Vet Clinics in Kuwait
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover verified veterinary clinics near you. Read reviews, check availability, 
            and book appointments with Kuwait's most trusted pet care professionals.
          </p>
          
          {/* Emergency Banner */}
          <div className="bg-red-600 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-2">🚨 Pet Emergency?</h3>
            <p className="mb-4">Need immediate veterinary care?</p>
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Find 24/7 Emergency Clinics
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
                placeholder="Search by clinic name or area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-navy-600 border-navy-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Area Filter */}
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="bg-navy-600 border border-navy-500 text-white px-4 py-2 rounded-lg"
            >
              {areas.map((area) => (
                <option key={area} value={area === "All Areas" ? "all" : area}>
                  {area}
                </option>
              ))}
            </select>

            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="bg-navy-600 border border-navy-500 text-white px-4 py-2 rounded-lg"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty === "All Specialties" ? "all" : specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center mt-4 text-gray-300">
            Found {filteredClinics.length} clinics
          </div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClinics.map((clinic) => (
              <Card key={clinic.id} className="bg-navy-700 border-navy-600 hover:bg-navy-600 transition-colors">
                <CardContent className="p-6">
                  {/* Clinic Image */}
                  <div className="relative mb-4">
                    <img 
                      src={clinic.image} 
                      alt={clinic.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {clinic.emergency && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        24/7 Emergency
                      </div>
                    )}
                    {clinic.verified && (
                      <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        ✓ Verified
                      </div>
                    )}
                  </div>

                  {/* Clinic Info */}
                  <h3 className="text-xl font-bold mb-2 text-paw-yellow">{clinic.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(clinic.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-300">
                      {clinic.rating} ({clinic.reviews} reviews)
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-start mb-3">
                    <MapPin className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm text-gray-300">{clinic.address}</p>
                      <p className="text-sm text-paw-yellow font-medium">{clinic.area}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center mb-3">
                    <Phone className="text-gray-400 mr-2" size={16} />
                    <a href={`tel:${clinic.phone}`} className="text-sm text-gray-300 hover:text-paw-yellow">
                      {clinic.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start mb-4">
                    <Clock className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-300">{clinic.hours}</p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-navy-600 text-xs px-2 py-1 rounded-full text-gray-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-paw-yellow text-navy-900 hover:bg-yellow-400">
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="border-navy-500 text-gray-300 hover:bg-navy-600">
                      <Navigation size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-navy-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Clinic Locations Map
          </h2>
          <div className="bg-navy-600 rounded-lg p-8 mb-8">
            <div className="text-gray-400 mb-4">
              🗺️ Interactive map coming soon
            </div>
            <p className="text-gray-300">
              View all clinic locations on an interactive map to find the nearest vet to your location.
            </p>
          </div>
          
          <Button className="bg-paw-yellow text-navy-900 px-8 py-3 hover:bg-yellow-400">
            View Full Map
          </Button>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by Pet Owners Across Kuwait
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-navy-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-paw-yellow mb-2">50+</div>
              <div className="text-gray-300">Verified Clinics</div>
            </div>
            <div className="bg-navy-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-paw-yellow mb-2">10,000+</div>
              <div className="text-gray-300">Happy Pets</div>
            </div>
            <div className="bg-navy-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-paw-yellow mb-2">15</div>
              <div className="text-gray-300">Cities Covered</div>
            </div>
            <div className="bg-navy-700 rounded-lg p-6">
              <div className="text-4xl font-bold text-paw-yellow mb-2">24/7</div>
              <div className="text-gray-300">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Appointments Instantly with PawApp
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Skip the phone calls. Book vet appointments, get reminders, 
            and access your pet's medical records all in one app.
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
                Connecting pet owners with trusted veterinary care across Kuwait.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Find Clinics</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/clinics?area=salmiya" className="hover:text-white">Salmiya Clinics</a></li>
                <li><a href="/clinics?area=hawalli" className="hover:text-white">Hawalli Clinics</a></li>
                <li><a href="/clinics?emergency=true" className="hover:text-white">Emergency Clinics</a></li>
                <li><a href="/clinics?specialty=surgery" className="hover:text-white">Surgery Specialists</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/health" className="hover:text-white">Health Center</a></li>
                <li><a href="/blog" className="hover:text-white">Pet Care Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Support</a></li>
                <li><a href="/emergency" className="hover:text-white">Emergency Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +965 2XXX XXXX</li>
                <li>📧 clinics@pawapp.com</li>
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