import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import TeamCarousel from "./TeamCarousel";
import teamMembers from "../data/teamMembers";

function Team() {
  const [isMobile, setIsMobile] = useState(false);

  // Checks screen size so carousel behavior works better on mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");

    setIsMobile(mq.matches);

    const onChange = (e) => setIsMobile(e.matches);

    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Carousel settings
  const OPTIONS = useMemo(
    () => ({
      loop: !isMobile,
      align: "center",
      containScroll: "trimSnaps",
    }),
    [isMobile]
  );

  return (
    <section
      id="team"
      className="bg-gradient-to-b from-blue-50 via-white to-yellow-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
          viewport={{ once: true, amount: 0.3 }} // Only animate once when in view
          transition={{ duration: 0.8 }} // Animation duration
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-block rounded-full bg-yellow-300 px-5 py-2 text-sm font-bold text-black shadow-sm">
            Our Team
          </div>

          <h2 className="mb-4 text-4xl font-extrabold text-blue-900 md:text-5xl">
            Meet the Aggies Behind the Project
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our team is working together to build a platform that helps NC A&amp;T
            students discover and support student-owned businesses.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-6xl">
            <TeamCarousel
              slides={teamMembers}
              options={OPTIONS}
              className="touch-pan-y"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;