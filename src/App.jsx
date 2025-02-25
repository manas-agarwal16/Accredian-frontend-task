import { useEffect, useState } from "react";
import {
  BonusTable,
  Button,
  Logo,
  Navbar,
  ReferralForm,
  Navbar,
} from "./components/index.js";
import { Clock, GraduationCap } from "lucide-react";
import { AxiosInstance } from "./helper/axiosInstance.js";
import { motion } from "framer-motion";

function App() {
  const [displayReferralForm, setDisplayReferralForm] = useState(false);

  const text = "Unlock Learning Together: Refer & Earn Rewards!";

  return (
    <>
      {displayReferralForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      {displayReferralForm && (
        <div>
          <ReferralForm setDisplayReferralForm={setDisplayReferralForm} />
        </div>
      )}
      <div>
        {/* <nav className="w-full bg-gray-900/80 backdrop-blur border-b border-gray-800 fixed">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div>
                <Logo />
              </div>

              <div className="hidden md:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Courses
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Benefits
                  </a>
                  <a
                    href="#"
                    className="relative z-10 cursor-pointer text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                    onClick={() => setDisplayReferralForm(true)}
                  >
                    Refer Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav> */}
        <Navbar setDisplayReferralForm={setDisplayReferralForm} />

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
                    console.log("Clicked");
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

        <h2 className="text-center mt-10 text-semibold text-white text-2xl md:text-3xl lg:text-4xl">
          Why To <span className="text-[#28A745]">Refer</span> and Enroll In Our{" "}
          <span className="text-[#FFA500]">Courses?</span>
        </h2>
        <div className="py-8 md:py-10 lg:py-12 w-full bg-gray-900">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Bonus Card */}
              <div className="flex-1 group p-[1px] rounded-xl bg-gradient-to-br from-yellow-600 to-amber-500 shadow-lg md:shadow-2xl shadow-yellow-900/30 hover:shadow-yellow-900/50 transition-shadow duration-300">
                <div className="bg-gray-900 rounded-xl p-4 md:p-6 h-full">
                  <div className="mb-3 md:mb-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-amber-500 rounded-lg md:rounded-xl mb-2 md:mb-4 animate-pulse-slow">
                      <span className="text-2xl md:text-3xl text-amber-100">
                        💰
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-2 md:mb-3">
                      Bonuses
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Referring our courses rewards both you and your friend
                      with
                      <span className="font-semibold text-amber-200">
                        {" "}
                        exclusive bonuses{" "}
                      </span>
                      and premium discounts
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Career Card */}
              <div className="flex-1 p-px rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-500 shadow-lg md:shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-shadow duration-300">
                <div className="bg-gray-900 rounded-xl p-4 md:p-6 h-full">
                  <div className="mb-3 md:mb-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-500 rounded-lg md:rounded-xl mb-2 md:mb-4">
                      <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-emerald-100" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent mb-2 md:mb-3">
                      Career-Boosting
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Gain{" "}
                      <span className="font-semibold text-emerald-300">
                        industry-leading skills
                      </span>
                      , expert mentorship, and career-transforming opportunities
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Learning Card */}
              <div className="flex-1 group p-px rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg md:shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-shadow duration-300">
                <div className="bg-gray-900 rounded-xl p-4 md:p-6 h-full">
                  <div className="mb-3 md:mb-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-500 rounded-lg md:rounded-xl mb-2 md:mb-4 animate-spin-slow">
                      <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-100" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent mb-2 md:mb-3">
                      High-Quality Learning
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Learn at your own pace with{" "}
                      <span className="font-semibold text-blue-300">
                        expert-curated content
                      </span>{" "}
                      designed to fit your schedule
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            <div className="text-center mt-8 md:mt-10 lg:mt-14 animate-fade-in-up">
              <Button onClick={() => setDisplayReferralForm(true)} />
            </div>
          </div>
        </div>

        <div className="mx-1 md:mx-10 lg:mx-14 xl:mx-20 mb-10 mt-3">
          <h2 className="text-center mb-8 text-semibold text-white text-2xl md:text-3xl lg:text-4xl">
            <span className="text-[#28A745]">Referral</span> Benefits as per the
            <span className="text-[#FFA500]"> Courses</span>
          </h2>
          <BonusTable />
        </div>
      </div>
    </>
  );
}

export default App;
