import { Wallet, Coins } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-px moving-border shadow-2xl">
      <div className="relative rounded-xl bg-gray-900 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600/30 to-purple-600/30">
              <th className="px-8 py-5 text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 font-bold text-lg uppercase tracking-wide">
                  Courses
                </span>
              </th>
              <th className="px-8 py-5 text-center group">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-300 font-bold text-lg uppercase tracking-wide">
                    Referrer Bonus
                  </span>
                  <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↑
                  </span>
                </div>
              </th>
              <th className="px-8 py-5 text-center group">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 font-bold text-lg uppercase tracking-wide">
                    Referee Bonus
                  </span>
                  <span className="text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↓
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
            hover:scale-[1.002] cursor-pointer group relative"
              >
                <td className="px-8 py-4 text-gray-300 font-medium text-md">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3 shadow-glow-purple" />
                    {course.name}
                  </div>
                </td>
                <td className="px-8 py-4 text-center">
                  <span
                    className="bg-green-900/30 text-green-400 px-3 py-1.5 rounded-full text-sm font-semibold 
                border border-green-800/50 group-hover:border-green-400/50 transition-colors"
                  >
                    {course.referrerBonus}
                  </span>
                </td>
                <td className="px-8 py-4 text-center">
                  <span
                    className="bg-pink-900/30 text-pink-400 px-3 py-1.5 rounded-full text-sm font-semibold 
                border border-pink-800/50 group-hover:border-pink-400/50 transition-colors"
                  >
                    {course.refereeBonus}
                  </span>
                </td>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BonusTable;
