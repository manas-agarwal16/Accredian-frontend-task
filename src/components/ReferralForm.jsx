import { useForm } from "react-hook-form";

const ReferralForm = ({ setDisplayReferralForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="fixed top-1/2 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[800px] p-4 sm:p-8 bg-gray-900 text-gray-300 rounded-lg shadow-xl z-50 animate-fade-in border border-gray-400">
      <span className="cursor-pointer absolute top-3 text-gray-600 right-4" onClick={() => setDisplayReferralForm(false)}>
        &#10006;
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
        Referral Form
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 sm:space-y-4"
      >
        {/* Grid Layout for Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
          {/* Referrer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
              Referrer Name *
            </label>
            <input
              {...register("referrerName", {
                required: "Referrer Name is required",
              })}
              className="w-full p-1 sm:p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.referrerName && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.referrerName.message}
              </p>
            )}
          </div>

          {/* Referrer Email */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
              Referrer Email *
            </label>
            <input
              type="email"
              {...register("referrerEmail", { required: "Email is required" })}
              className="w-full p-1 sm:p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.referrerEmail && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.referrerEmail.message}
              </p>
            )}
          </div>

          {/* Referee Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
              Referee Name *
            </label>
            <input
              {...register("refereeName", {
                required: "Referee Name is required",
              })}
              className="w-full p-1 sm:p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.refereeName && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.refereeName.message}
              </p>
            )}
          </div>

          {/* Referee Email */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
              Referee Email *
            </label>
            <input
              type="email"
              {...register("refereeEmail", { required: "Email is required" })}
              className="w-full p-1 sm:p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.refereeEmail && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.refereeEmail.message}
              </p>
            )}
          </div>

          {/* Referee Phone (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
              Referee Phone
            </label>
            <input
              {...register("refereePhone", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              placeholder="10-digit phone number"
              className="w-full p-1 sm:p-2 bg-gray-800 text-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.refereePhone && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.refereePhone.message}
              </p>
            )}
          </div>

          {/* Course Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
              Course Name *
            </label>
            <select
              {...register("courseName", {
                required: "Course selection is required",
              })}
              className="w-full p-1 sm:p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="">Select a course</option>
              <option value="Product Management">Product Management</option>
              <option value="Strategic Product Management">
                Strategic Product Management
              </option>
              <option value="Digital Transformation">
                Digital Transformation
              </option>
            </select>
            {errors.courseName && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.courseName.message}
              </p>
            )}
          </div>
        </div>

        {/* Referrer Note (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
            Referrer Note
          </label>
          <textarea
            {...register("referrerNote")}
            placeholder="Optional"
            className="w-full p-1 sm:p-2 bg-gray-800 text-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold pt-2 sm:py-3 rounded-lg transition-all"
        >
          Submit Referral
        </button>
      </form>
    </div>
  );
};

export default ReferralForm;
