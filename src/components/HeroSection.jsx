import React from "react";
import { motion } from "framer-motion";
import { Button } from "./index.js";

const HeroSection = ({ setDisplayReferralForm }) => {
  const text = "Unlock Learning Together: Refer & Earn Rewards!";

  return (
    <div className="pt-32 py-10 md:py-0 flex md:pt-20 bg-gradient-to-tr from-gray-900 to-blue-800">
      <div className="flex items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Letter-by-letter Animation */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-200 drop-shadow-xl mb-6">
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: (wordIndex * 5 + charIndex) * 0.05,
                      duration: 0.1,
                    }}
                    className={word === "Rewards!" ? "text-[#E91E63]" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
                &nbsp;
              </span>
            ))}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Pursue your dream career by enrolling in our expert-led courses.
          </p>
          <div className="text-center mt-8 md:mt-10 lg:mt-14 animate-fade-in-up">
            <Button
              type="button"
              className="relative z-10 bg-[#E91E63] hover:bg-[#ff1362] text-white px-8 py-4 rounded-lg tracking-wide font-medium transition-colors cursor-pointer border-2"
              onClick={() => {
                setDisplayReferralForm(true);
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Image Animation */}
      <div className="animate-float relative left-3 hidden md:block">
        <img
          className="w-2/3 h-[70vh] animate-slide-in-right"
          src="./src/assets/hero_section_image.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
