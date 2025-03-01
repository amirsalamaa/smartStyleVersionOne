import { useState, useRef } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import TeamMember from "./components/TeamMember";
import TryOnModal from "./components/TryOnModal";

// Import product images
import eyeglass1 from "./assets/products/eyeglass1.png";
import eyeglass2 from "./assets/products/eyeglass2.png";
import eyeglass3 from "./assets/products/eyeglass3.png";

// Import team member images
import teamMember1 from "./assets/teamMembers/teamMember1.jpg";
import teamMember2 from "./assets/teamMembers/teamMember2.jpg";
import teamMember3 from "./assets/teamMembers/teamMember3.jpg";
import teamMember4 from "./assets/teamMembers/teamMember4.jpg";
import teamMember5 from "./assets/teamMembers/teamMember5.jpg";

// Sample data with product images
const sampleGlasses = [
  {
    id: 1,
    name: "Classic Aviator",
    image: eyeglass1,
    description: "Timeless aviator style with gold frame",
  },
  {
    id: 2,
    name: "Modern Wayfarer",
    image: eyeglass2,
    description: "Contemporary take on the iconic wayfarer design",
  },
  {
    id: 3,
    name: "Round Metal",
    image: eyeglass3,
    description: "Vintage-inspired round metal frames",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    role: "AI Engineer",
    roleDescription:
      "Specializing in facial recognition and landmark detection for precise virtual eyewear placement",
    linkedIn: "https://linkedin.com",
    image: teamMember1,
  },
  {
    id: 2,
    name: "Omar Mohamed",
    role: "AI Engineer",
    roleDescription:
      "Focusing on real-time 3D modeling and rendering of eyewear using advanced computer vision techniques",
    linkedIn: "https://linkedin.com",
    image: teamMember2,
  },
  {
    id: 3,
    name: "Ziad Ahmed",
    role: "Full Stack Developer",
    roleDescription:
      "Architecting the backend infrastructure using Node.js and AWS, ensuring scalable and secure processing of virtual try-on requests",
    linkedIn: "https://linkedin.com",
    image: teamMember3,
  },
  {
    id: 4,
    name: "Ziad Tamer",
    role: "AI Engineer",
    roleDescription:
      "Expert in deep learning algorithms for realistic lighting and shadow simulation in virtual try-on experiences",
    linkedIn: "https://linkedin.com",
    image: teamMember4,
  },
  {
    id: 5,
    name: "Amir Salama",
    role: "Full Stack Developer",
    roleDescription:
      "Leading the frontend development with React and Three.js, creating immersive 3D try-on experiences and responsive user interfaces",
    linkedIn: "https://linkedin.com",
    image: teamMember5,
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
