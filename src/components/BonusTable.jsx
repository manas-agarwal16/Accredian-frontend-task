import { Wallet, Coins } from "lucide-react";

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
    <>
      <div className="relative border-2 rounded-xl overflow-auto border-gray-600 bg-gray-900 shadow-lg moving-border">
        <table className="min-w-full border-white text-left ">
          <thead className="bg-gray-800 rounded-t-lg">
            <tr className="text-blue-400 text-lg">
              <th className="px-6 py-3">Courses</th>
              <th className="px-6 py-3 text-center">Referrer Bonus</th>
              <th className="px-6 py-3 text-center">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="hover:bg-gray-800 transition-colors">
                <td className="text-gray-300 font-mono px-6 py-3">
                  {course.name}
                </td>
                <td className="px-6 py-3 text-green-200 text-center font-semibold">
                  {course.referrerBonus}
                </td>
                <td className="px-6 py-3 text-green-200 text-center font-semibold">
                  {course.refereeBonus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BonusTable;
