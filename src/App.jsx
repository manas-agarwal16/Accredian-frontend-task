import { useState } from "react";
import { BonusTable, Button, Logo, ReferralForm } from "./components/index.js";
import { Clock, GraduationCap } from "lucide-react";

function App() {
  const [displayReferralForm, setDisplayReferralForm] = useState(false);

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
        <nav class="dark:bg-gray-900/80 backdrop-blur border-b dark:border-gray-800 fixed w-full">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex-shrink-0">
                <Logo />
              </div>

              <div class="hidden md:block">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="dark:text-gray-300 hover:dark:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Courses
                  </a>
                  <a
                    href="#"
                    class="dark:text-gray-300 hover:dark:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    class="dark:text-gray-300 hover:dark:text-white px-3 py-2 rounded-md transition-colors"
                  >
                    Benefits
                  </a>
                  <a
                    href="#"
                    class="dark:text-gray-300 hover:dark:text-white px-3 py-2 rounded-md transition-colors"
                    onClick={() => setDisplayReferralForm(true)}
                  >
                    Refer Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div class="flex pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div class="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h1 class="text-3xl md:text-4xl font-bold dark:text-white mb-6">
                Unlock Learning Together: Refer & Earn{" "}
                <span className="text-[#E91E63]">Rewards!</span>
              </h1>
              <p class="text-xl dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Pursue your dream career by enrolling in our expert-led courses.
              </p>
              <Button onClick={() => setDisplayReferralForm(true)} />
            </div>
          </div>
          <div className="mr-4">
            <img
              className="w-3/4 h-[90vh]"
              src="./src/assets/hero_section_image.png"
              alt="image"
            />
          </div>
        </div>

        <h2 className="text-center mt-4 text-semibold text-white text-3xl md:text-4xl">
          Why To <span className="text-[#28A745]">Refer</span> and Enroll In Our{" "}
          <span className="text-[#FFA500]">Courses?</span>
        </h2>
        <div class="py-10 dark:bg-gray-900">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-gray-800 shadow-gray-700 shadow-2xl p-6 rounded-xl">
                <div class="w-12 h-12 text-3xl text-center bg-yellow-600 rounded-lg mb-4">
                  &#128176;
                </div>
                <h3 class="text-xl font-semibold dark:text-white mb-2">
                  Bonuses
                </h3>
                <p class="dark:text-gray-300">
                  Referring our courses rewards both you and your friend with
                  exclusive bonuses and discounts
                </p>
              </div>

              <div class="dark:bg-gray-800 shadow-gray-700 shadow-2xl p-6 rounded-xl">
                <div class="w-12 h-12 text-3xl flex justify-center items-center bg-green-600 rounded-lg mb-4">
                  <GraduationCap className="w-10 h-10 text-green-300" />
                </div>
                <h3 class="text-xl font-semibold dark:text-white mb-2">
                  Career-Boosting
                </h3>
                <p class="dark:text-gray-300">
                  Gain industry-relevant skills, expert guidance, and
                  career-boosting opportunities with our top-tier courses.
                </p>
              </div>

              <div class="dark:bg-gray-800 shadow-gray-700 shadow-2xl p-6 rounded-xl">
                <div class="w-12 h-12 bg-blue-600 flex justify-center items-center rounded-lg text-2xl mb-4">
                  <Clock className="w-10 h-8 text-blue-300" />
                </div>
                <h3 class="text-xl font-semibold dark:text-white mb-2">
                  Flexible & High-Quality Learning
                </h3>
                <p class="dark:text-gray-300">
                  Learn at your own pace with expert-curated content designed to
                  fit your schedule and career goals.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button onClick={() => setDisplayReferralForm(true)} />
            </div>
          </div>
        </div>

        <div className="mx-20">
          <h2 className="text-center mt-4 mb-8 text-semibold text-white text-3xl md:text-4xl">
            Referral Benefits as per the
            <span className="text-[#FFA500]"> Courses</span>
          </h2>
          <BonusTable />
        </div>

        <div class="dark:bg-gray-900 py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold dark:text-white mb-4">
              Start building today
            </h2>
            <p class="dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Join thousands of developers shipping faster with our modern
              toolkit.
            </p>
            <div class="flex justify-center space-x-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button class="border dark:border-gray-600 dark:text-white px-6 py-3 rounded-lg font-medium hover:dark:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
