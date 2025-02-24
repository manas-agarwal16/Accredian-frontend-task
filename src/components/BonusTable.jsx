const BonusTable = () => {
  const courses = [
    {
      name: "Full Stack Development",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "Data Science",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Machine Learning",
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
    <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg shadow-lg">
      <table className="min-w-full border border-gray-700 text-left rounded-lg overflow-hidden">
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
  );
};

export default BonusTable;
