import { useForm } from "react-hook-form";
import { useState } from "react";
import { AxiosInstance } from "../helper/axiosInstance";
import toast from "react-hot-toast";
import { Input, Loader } from "./index.js";

const ReferralForm = ({ setDisplayReferralForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await AxiosInstance.post("/refer-now", data);
      setLoading(false);
      setDisplayReferralForm(false);
      console.log("res : ", res);
      if (res?.data?.status < 400) {
        toast.success(
          "Referral submitted successfully! We've sent a confirmation email to you and the referee.",
          {
            duration: 4000,
          }
        );
      } else {
        toast.error(res?.data?.message, {
          duration: 4000,
        });
      }
    } catch (error) {
      setDisplayReferralForm(false);
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="fixed top-1/2 z-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-4 sm:p-8 bg-gray-900 text-gray-300 rounded-lg shadow-xl animate-fade-in border border-gray-400">
        {/* Close Button */}
        <span
          className="cursor-pointer absolute top-3 right-4 text-gray-500 text-lg sm:text-xl hover:text-gray-300 transition"
          onClick={() => setDisplayReferralForm(false)}
          aria-label="Close"
        >
          &#10006;
        </span>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
          Referral Form
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Referrer Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Referrer Name *
              </label>
              <Input
                {...register("referrerName", {
                  required: "Referrer Name is required",
                })}
                autofocus={true}
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              {errors.referrerName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.referrerName.message}
                </p>
              )}
            </div>

            {/* Referrer Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Referrer Email *
              </label>
              <Input
                type="email"
                {...register("referrerEmail", {
                  required: "Email is required",
                })}
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              {errors.referrerEmail && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.referrerEmail.message}
                </p>
              )}
            </div>

            {/* Referee Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Referee Name *
              </label>
              <Input
                {...register("refereeName", {
                  required: "Referee Name is required",
                })}
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              {errors.refereeName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.refereeName.message}
                </p>
              )}
            </div>

            {/* Referee Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Referee Email *{" "}
                <span className="text-xs">
                  (Must be different from Referrer email)
                </span>
              </label>
              <Input
                type="email"
                {...register("refereeEmail", {
                  required: "Email is required",
                  validate: (value) =>
                    value !== watch("referrerEmail") ||
                    "Referee email must be different",
                })}
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              {errors.refereeEmail && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.refereeEmail.message}
                </p>
              )}
            </div>

            {/* Referee Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Referee Phone
              </label>
              <Input
                {...register("refereePhone", {
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                placeholder="10-digit phone number"
                className="w-full p-2 bg-gray-800 text-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              {errors.refereePhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.refereePhone.message}
                </p>
              )}
            </div>

            {/* Course Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Course Name *
              </label>
              <div className="relative">
                <select
                  {...register("courseName", {
                    required: "Course selection is required",
                  })}
                  className="w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option value="">Select a course</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Strategic Product Management">
                    Strategic Product Management
                  </option>
                  <option value="Digital Transformation">
                    Digital Transformation
                  </option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Data Structures and Algorithms">
                    Data Structures and Algorithms
                  </option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Blockchain Development">
                    Blockchain Development
                  </option>
                </select>
                {/* Custom Arrow */}
                <div className="absolute inset-y-0 right-2 flex items-center text-gray-400 pointer-events-none">
                  ▼
                </div>
              </div>
              {errors.courseName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.courseName.message}
                </p>
              )}
            </div>
          </div>

          {/* Referrer Note */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Referrer Note{" "}
              <span className="text-xs">
                (This note will be emailed to the referee)
              </span>
            </label>
            <textarea
              {...register("referrerNote")}
              placeholder="Optional"
              className="w-full p-2 bg-gray-800 text-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all"
          >
            Submit Referral
          </button>
        </form>
      </div>
    </>
  );
};

export default ReferralForm;
