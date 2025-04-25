import React from "react";
import { useForm } from "react-hook-form";

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data.accepted) {
      alert("Please accept the Privacy Policy.");
      return;
    }
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-16 bg-white">
      {/* Left Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-2 border-lime-400 rounded-2xl p-8 w-full max-w-lg shadow-md"
      >
        <h4 className="uppercase text-sm tracking-widest text-gray-600 mb-1">
          Get in Touch
        </h4>
        <h2 className="text-2xl font-bold mb-6">Appointment Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name *</label>
          <input
            type="text"
            placeholder="e.g. Enter your first name"
            {...register("name", { required: "Name is required" })}
            className="w-full border-2 border-lime-400 rounded px-4 py-2 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email *</label>
          <input
            type="email"
            placeholder="e.g. Enter your best email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full border-2 border-lime-400 rounded px-4 py-2 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            I'm Interested In *
          </label>
          <select
            {...register("interest", { required: "Please select an option" })}
            className="w-full border-2 border-lime-400 rounded px-4 py-2 bg-white"
          >
            <option value="">Select a Choice...</option>
            <option value="vet">Veterinary Consultation</option>
            <option value="adoption">Pet Adoption</option>
            <option value="grooming">Pet Grooming</option>
          </select>
          {errors.interest && (
            <p className="text-red-500 text-sm mt-1">
              {errors.interest.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            rows="3"
            placeholder="Write your message"
            {...register("message")}
            className="w-full border-2 border-lime-400 rounded px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            {...register("accepted")}
            className="mr-2 mt-1"
          />
          <label className="text-sm">
            I accept the Website{" "}
            <a href="#" className="text-lime-600 underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-full"
        >
          Contact Us Now
        </button>
      </form>

      {/* Right Image */}
      <div className="hidden lg:block relative">
        <img
          src="/images/woman-dog.webp"
          alt="Woman and Dog"
          className="rounded-xl w-[400px] h-auto z-10 relative"
        />
        {/* Icon overlays (optional) */}
        <div className="absolute top-10 left-10 bg-lime-500 p-3 rounded-full">
          <svg
            className="text-white w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v.217l-8 4.8-8-4.8V5z" />
            <path d="M18 8.383l-8 4.8-8-4.8V15a2 2 0 002 2h12a2 2 0 002-2V8.383z" />
          </svg>
        </div>
        {/* More icons can be added here similarly */}
      </div>
    </div>
  );
}
