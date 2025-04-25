import React, { useState } from 'react';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';

const Volunteer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log("Volunteer form data:", data);
    // Here you would typically send the data to your backend
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Become a <span className="text-lime-500">Volunteer</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and make a difference in the lives of animals in need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Volunteer?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Make a direct impact on animal welfare</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Gain valuable experience working with animals</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Join a community of animal lovers</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-lime-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Flexible scheduling options</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Volunteer Opportunities</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Animal Care</h3>
                  <p className="text-gray-600">Help with feeding, grooming, and basic care of our animals.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Adoption Support</h3>
                  <p className="text-gray-600">Assist with adoption events and help potential adopters find their perfect match.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Foster Care</h3>
                  <p className="text-gray-600">Provide temporary homes for animals in need of extra care.</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Event Coordination</h3>
                  <p className="text-gray-600">Help organize and run fundraising and awareness events.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isFormSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-lime-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-6">We've received your volunteer application. Our team will review it and get back to you soon.</p>
                <button
                  onClick={() => setIsFormSubmitted(false)}
                  className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Volunteer Application</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Areas of Interest
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          value="animal_care"
                          className="rounded text-lime-500 focus:ring-lime-500"
                          {...register("interests")}
                        />
                        <span className="ml-2 text-gray-600">Animal Care</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          value="adoption_support"
                          className="rounded text-lime-500 focus:ring-lime-500"
                          {...register("interests")}
                        />
                        <span className="ml-2 text-gray-600">Adoption Support</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          value="foster_care"
                          className="rounded text-lime-500 focus:ring-lime-500"
                          {...register("interests")}
                        />
                        <span className="ml-2 text-gray-600">Foster Care</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          value="events"
                          className="rounded text-lime-500 focus:ring-lime-500"
                          {...register("interests")}
                        />
                        <span className="ml-2 text-gray-600">Event Coordination</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Availability
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      rows="3"
                      placeholder="Please describe your availability..."
                      {...register("availability", { required: "Availability information is required" })}
                    />
                    {errors.availability && (
                      <p className="text-sm text-red-500 mt-1">{errors.availability.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-xl transition duration-200"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer; 