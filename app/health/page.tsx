export default function HealthPage() {
  const healthTopics = [
    {
      title: "Common Pet Symptoms",
      description: "Learn to identify symptoms that may indicate health issues in your pet",
      icon: "🔍",
      topics: ["Vomiting & Diarrhea", "Loss of Appetite", "Lethargy", "Breathing Issues"]
    },
    {
      title: "Preventive Care",
      description: "Essential preventive measures to keep your pet healthy year-round",
      icon: "🛡️",
      topics: ["Vaccination Schedule", "Parasite Prevention", "Dental Care", "Regular Checkups"]
    },
    {
      title: "Nutrition & Diet",
      description: "Complete guide to proper nutrition for different pets and life stages",
      icon: "🍽️",
      topics: ["Age-Appropriate Feeding", "Special Diets", "Toxic Foods", "Supplements"]
    },
    {
      title: "Emergency Care",
      description: "Know what to do in pet emergencies before you reach the vet",
      icon: "🚨",
      topics: ["First Aid Basics", "When to Rush to Vet", "Emergency Kit", "CPR for Pets"]
    }
  ];

  const commonConditions = [
    {
      condition: "Skin Allergies",
      symptoms: ["Itching", "Red skin", "Hair loss", "Hot spots"],
      description: "Learn about common skin allergies in pets and when to seek treatment."
    },
    {
      condition: "Dental Disease",
      symptoms: ["Bad breath", "Yellow tartar", "Difficulty eating", "Bleeding gums"],
      description: "Dental health is crucial for your pet's overall wellbeing."
    },
    {
      condition: "Joint Problems",
      symptoms: ["Limping", "Stiffness", "Difficulty jumping", "Reluctance to move"],
      description: "Arthritis and joint issues are common in aging pets."
    },
    {
      condition: "Digestive Issues",
      symptoms: ["Vomiting", "Diarrhea", "Loss of appetite", "Abdominal pain"],
      description: "Digestive problems can range from simple to serious."
    }
  ];

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
            <a href="/#clinics" className="text-sm font-medium hover:text-paw-yellow">Clinics</a>
            <a href="/blog" className="text-sm font-medium hover:text-paw-yellow">Blog</a>
            <a href="/contact" className="text-sm font-medium hover:text-paw-yellow">Contact</a>
            <a href="/health" className="text-sm font-medium text-paw-yellow">Health Center</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pet Health Resource Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to keeping your furry friends healthy and happy. 
            Expert-backed information, symptoms guides, and emergency protocols.
          </p>
          
          {/* Quick Symptom Checker */}
          <div className="bg-navy-700 rounded-lg p-6 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4 text-paw-yellow">Quick Symptom Checker</h2>
            <p className="text-gray-300 mb-4">What symptoms is your pet showing?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Vomiting", "Diarrhea", "Lethargy", "Loss of Appetite", "Coughing", "Limping"].map((symptom) => (
                <button
                  key={symptom}
                  className="bg-navy-600 hover:bg-paw-yellow hover:text-navy-900 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {symptom}
                </button>
              ))}
            </div>
            <button className="mt-4 bg-paw-yellow text-navy-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              Get Recommendations
            </button>
          </div>
        </div>
      </section>

      {/* Health Topics Grid */}
      <section className="py-16 px-4 bg-navy-700">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Essential Health Topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthTopics.map((topic, index) => (
              <div key={index} className="bg-navy-600 rounded-lg p-6 hover:bg-navy-500 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-paw-yellow">{topic.title}</h3>
                <p className="text-gray-300 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.topics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="text-sm text-gray-400">• {subtopic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Pet Health Conditions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commonConditions.map((condition, index) => (
              <div key={index} className="bg-navy-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3 text-paw-yellow">{condition.condition}</h3>
                <p className="text-gray-300 mb-4">{condition.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Common Symptoms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {condition.symptoms.map((symptom, symIndex) => (
                      <span key={symIndex} className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="bg-paw-yellow text-navy-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 px-4 bg-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">🚨 Pet Emergency?</h2>
          <p className="text-xl mb-6">
            If your pet is experiencing a medical emergency, don't wait - contact your nearest emergency vet immediately.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Find Emergency Vet
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
              Emergency First Aid Guide
            </button>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Instant Access to Vet Care
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download PawApp for instant access to licensed veterinarians, 
            appointment booking, and personalized health tracking for your pets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/app/pawapp" 
              className="bg-paw-yellow text-navy-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              <span>📱</span> Download for iOS
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.pawapp" 
              className="border-2 border-paw-yellow text-paw-yellow px-8 py-4 rounded-lg font-bold hover:bg-paw-yellow hover:text-navy-900 transition-colors flex items-center justify-center gap-2"
            >
              <span>🤖</span> Download for Android
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
              <h3 className="font-bold mb-4 text-paw-yellow">Health Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/health/symptoms" className="hover:text-white">Symptom Checker</a></li>
                <li><a href="/health/emergency" className="hover:text-white">Emergency Guide</a></li>
                <li><a href="/health/prevention" className="hover:text-white">Preventive Care</a></li>
                <li><a href="/health/nutrition" className="hover:text-white">Nutrition Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/clinics" className="hover:text-white">Find Clinics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-paw-yellow">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +965 2XXX XXXX</li>
                <li>📧 info@pawapp.com</li>
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