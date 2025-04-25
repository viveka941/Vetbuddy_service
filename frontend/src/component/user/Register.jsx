import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Navbar";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [role, setRole] = useState("");
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    try {
      const res = await axios.post("http://localhost:5000/user/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res?.data?.message) {
        console.log("Response:", res.data);
        setMessage(res.data.message);
        setMessageType("success");
        if (messageType === "success") {
          navigate("/login");
        }
      } else {
        setMessage("Unexpected response from server.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        const errMsg =
          error.response.data?.message || "Invalid credentials or bad request.";
        setMessage(errMsg);
      } else if (error.request) {
        setMessage("No response from server.");
      } else {
        setMessage("An unexpected error occurred.");
      }

      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Join <span className="text-lime-500">VetBuddy</span>
            </h2>
            <p className="text-gray-600 mt-2">Create your account to get started</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select role for registration
            </label>
            <select
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
            >
              <option value="">-- Select Role --</option>
              <option value="Client">Client</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          {role && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {role} Registration
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
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
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value={role}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50"
                    {...register("role", { required: "Role is autofilled" })}
                  />
                </div>

                {role === "Doctor" && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Education
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                        {...register("education", {
                          required: "Education is required",
                        })}
                      />
                      {errors.education && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.education.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Specialization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                        {...register("specialization", {
                          required: "Specialization is required for doctors",
                        })}
                      />
                      {errors.specialization && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.specialization.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Experience (in years)
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                        {...register("experience", {
                          required: "Experience is required",
                        })}
                      />
                      {errors.experience && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-xl transition duration-200"
                >
                  Create Account
                </button>

                {message && (
                  <p
                    className={`text-center text-sm mt-3 ${
                      messageType === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          )}

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-lime-500 hover:text-lime-600 font-semibold">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
