import { useState, useRef } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import TeamMember from "./components/TeamMember";
import TryOnModal from "./components/TryOnModal";

// Sample data - replace with your actual data
const sampleGlasses = [
  {
    id: 1,
    name: "Classic Aviator",
    image: "https://via.placeholder.com/300x200?text=Aviator+Glasses",
  },
  {
    id: 2,
    name: "Modern Wayfarer",
    image: "https://via.placeholder.com/300x200?text=Wayfarer+Glasses",
  },
  {
    id: 3,
    name: "Round Metal",
    image: "https://via.placeholder.com/300x200?text=Round+Metal+Glasses",
  },
  // Add more glasses as needed
];

const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    role: "AI Engineer",
    roleDescription:
      "Specializing in computer vision and deep learning models for virtual try-on technology",
    linkedIn: "https://linkedin.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Frontend Developer",
    roleDescription:
      "Creating seamless and intuitive user experiences with modern web technologies",
    linkedIn: "https://linkedin.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "UI/UX Designer",
    roleDescription:
      "Crafting beautiful and user-friendly interfaces with a focus on accessibility and user experience",
    linkedIn: "https://linkedin.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Backend Developer",
    roleDescription:
      "Building robust and scalable server infrastructure to support our virtual try-on platform",
    linkedIn: "https://linkedin.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Machine Learning Engineer",
    roleDescription:
      "Developing and optimizing AI models for accurate virtual eyewear fitting and face detection",
    linkedIn: "https://linkedin.com",
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGlasses, setSelectedGlasses] = useState(null);
  const glassesRef = useRef(null);

  const handleTryOn = (glasses) => {
    setSelectedGlasses(glasses);
    setIsModalOpen(true);
  };

  const scrollToGlasses = () => {
    glassesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Virtual Try-On
            <span className="block text-blue-600">Eyeglasses</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Experience the future of eyewear shopping. Upload your photo and see
            how our glasses look on you instantly!
          </p>
          <button
            onClick={scrollToGlasses}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto space-x-2"
          >
            <span>Try Glasses Now</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Eyeglasses Products Section */}
      <section ref={glassesRef} className="py-20 px-4 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide selection of premium eyewear. Each pair is
              carefully crafted for style and comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleGlasses.map((glasses) => (
              <ProductCard
                key={glasses.id}
                {...glasses}
                onTryOn={() => handleTryOn(glasses)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our virtual try-on technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Try On Modal */}
      <TryOnModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        glassesImage={selectedGlasses?.image}
      />
    </div>
  );
}

export default App;
