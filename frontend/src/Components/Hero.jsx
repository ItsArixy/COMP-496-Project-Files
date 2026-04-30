import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from "lucide-react";
import heroImg from '../imgs/hero.png'; 
import { useAuth } from '../auth/AuthContext';

function Hero({ onLoginClick }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Scroll to Home section instead of navigating
  const scrollToHome = () => {
    document.getElementById('services-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat pt-20 md:bg-cover bg-center md:bg-fixed mt-0"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex">
        
        {/* animation wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // start hidden
          animate={{ opacity: 1, y: 0 }} // fade in and move up
          transition={{ duration: 0.8 }} // animation duration
          className="max-w-3xl"
        >

          {/* Main Heading, staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // start hidden and slightly down
            animate={{ opacity: 1, y: 0 }} // fade in and move up
            transition={{ delay: 0.3, duration: 0.8 }} // delay after badge
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Find the Aggie Business that{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              Suits You!
            </span>
          </motion.h1>

          {/* Subheading, continued stagger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} // start hidden
            animate={{ opacity: 1, y: 0 }} // fade in
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Where entrepreneurship meets the Aggie spirit.
          </motion.p>

          {/* Get Started Button (scrolls instead of navigating) */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            onClick={scrollToHome} // updated behavior
            className="bg-yellow-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition cursor-pointer inline-flex items-center gap-2 group transform hover:scale-105 duration-300 ease-in-out"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Login Button (only show if NOT logged in) */}
          {!user && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              onClick={onLoginClick} // uses popup instead of navigate
              className="bg-transparent border border-white/25 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition cursor-pointer inline-flex items-center gap-2 group transform hover:scale-105 duration-300 ease-in-out ml-4"
            >
              Login
              <Sparkles className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;