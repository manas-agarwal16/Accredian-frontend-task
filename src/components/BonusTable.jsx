import { Wallet, Coins } from "lucide-react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const BonusTable = () => {
  const courses = [
    {
      name: "Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Data Analyst",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Data Structures and Algorithms",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Cyber Security",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Blockchain Development",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];
  return (
    <div className="mx-1 md:mx-10 lg:mx-14 xl:mx-20 mb-10 mt-3">
      <h2 className="text-center mb-8 text-semibold text-white text-xl md:text-2xl lg:text-4xl">
        <span className="text-[#28A745]">Referral</span> Benefits as per the
        <span className="text-[#FFA500]"> Courses</span>
      </h2>
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 md:p-px moving-border shadow-2xl">
        <div className="relative rounded-xl bg-gray-900 overflow-hidden">
          <div className="overflow-x-auto md:overflow-visible pb-3 md:pb-0">
            <table className="w-full border-collapse md:min-w-0">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600/30 to-blue-800/30">
                  <th className="md:px-8 px-8 md:py-5 py-3 text-left">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 font-bold md:text-lg text-base uppercase tracking-wide">
                      Courses
                    </span>
                  </th>
                  <th className="md:px-8 px-1 md:py-5 py-3 text-center group">
                    <section className="flex items-center justify-center space-x-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-300 font-bold md:text-lg text-base uppercase tracking-wide">
                        Referrer Bonus
                      </span>
                    </section>
                  </th>
                  <th className="md:px-8 px-1 md:py-5 py-3 text-center group">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 font-bold md:text-lg text-base uppercase tracking-wide">
                        Referee Bonus
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-800 hover:bg-gray-800/50 transition-all duration-300 
                md:hover:scale-[1.002] cursor-pointer group relative"
                  >
                    <td className="md:px-8 px-4 md:py-4 py-3 text-gray-300 font-medium md:text-md text-sm">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-purple-500 rounded-full md:mr-3 mr-2 shadow-glow-purple" />
                        {course.name}
                      </div>
                    </td>
                    <td className="md:px-8 px-4 md:py-4 py-3 text-center">
                      <span
                        className="bg-green-900/30 text-green-400 md:px-3 px-2 md:py-1.5 py-1 rounded-full md:text-sm text-[8px] font-semibold 
                    border border-green-800/50 md:group-hover:border-green-400/50 transition-colors"
                      >
                        {course.referrerBonus}
                      </span>
                    </td>
                    <td className="md:px-8 px-4 md:py-4 py-3 text-center">
                      <span
                        className="bg-pink-900/30 text-pink-400 md:px-3 px-2 md:py-1.5 py-1 rounded-full md:text-sm text-[8px] font-semibold 
                    border border-pink-800/50 md:group-hover:border-pink-400/50 transition-colors"
                      >
                        {course.refereeBonus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusTable;
