import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAppointment, setUserAppointment] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [client, setClient] = useState([]);
  const [drClintList, setDrCliList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/dashboard/${id}`
        );
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };
    userData();
  }, [id]);

  useEffect(() => {
    const application = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/user/userAllAppointment"
        );
        const appointmentList = res.data.list.filter(
          (appi) => appi.userId === id
        );
        setUserAppointment(appointmentList);

        const doctorAppi = res.data.list.filter(
          (appi) => appi.DoctorName === id
        );
        setDrCliList(doctorAppi);
      } catch (error) {
        console.log("server is not respond", error);
      }
    };
    application();
  }, [id]);

  useEffect(() => {
    const doctorList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/allUser");
        const doctorList = response.data.user.filter(
          (user) => user.role == "Doctor"
        );
        setDoctor(doctorList);

        const clientList = response.data.user.filter(
          (user) => user.role == "Client"
        );
        setClient(clientList);
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    doctorList();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-300">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-purple-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-2 drop-shadow-md">
            🌿 Welcome, {user?.name || "User"}!
          </h1>
          <p className="text-lg text-blue-600">
            View your profile details, check appointments, and manage your
            dashboard with ease.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-green-200">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              🌳 Profile Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-green-700">
                  <span className="font-medium">Name:</span> {user.name}
                </p>
                <p className="text-green-700">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-green-700">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-green-700">
                  <span className="font-medium">Role:</span> {user.role}
                </p>
                {user.education && (
                  <p className="text-green-700">
                    <span className="font-medium">Education:</span>{" "}
                    {user.education}
                  </p>
                )}
                {user.specialization && (
                  <p className="text-green-700">
                    <span className="font-medium">Specialization:</span>{" "}
                    {user.specialization}
                  </p>
                )}
                {user.experience && (
                  <p className="text-green-700">
                    <span className="font-medium">Experience:</span>{" "}
                    {user.experience}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105">
                🌱 Edit Profile
              </button>
              <Link
                to="/"
                className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                🌳 Logout
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 border border-blue-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-purple-700">
                📗 Your Appointments
              </h2>
              <Link
                to={`/appointementbook/${id}`}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                🍀 Book New Appointment
              </Link>
            </div>

            {(user.role === "Client" ? userAppointment : drClintList).length >
            0 ? (
              <div className="space-y-4">
                {(user.role === "Client" ? userAppointment : drClintList).map(
                  (data, index) => {
                    const matchedPerson =
                      user.role === "Client"
                        ? doctor.find((d) => d._id === data.DoctorName)
                        : client.find((d) => d._id === data.userId);

                    return (
                      <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50 transition-colors"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-blue-900">
                              Animal: {data.animalName}
                            </p>
                            <p className="text-gray-600">
                              Reason: {data.reason}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">
                              Date:{" "}
                              {new Date(data.dateTime).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">
                              Address: {data.address}
                            </p>
                          </div>
                        </div>

                        {matchedPerson && (
                          <div className="mt-4 pl-4 border-l-4 border-blue-200">
                            <h4 className="font-medium text-blue-800 mb-2">
                              {user.role === "Client"
                                ? "Doctor Details:"
                                : "Client Details:"}
                            </h4>
                            <p className="text-gray-700">
                              Name: {matchedPerson.name}
                            </p>
                            {matchedPerson.education && (
                              <p className="text-gray-700">
                                Education: {matchedPerson.education}
                              </p>
                            )}
                            {matchedPerson.experience && (
                              <p className="text-gray-700">
                                Experience: {matchedPerson.experience}
                              </p>
                            )}
                            <p className="text-gray-700">
                              Phone: {matchedPerson.phone || "N/A"}
                            </p>
                            {user.role !== "Client" && (
                              <p className="text-gray-700">
                                Email: {matchedPerson.email}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 italic">
                  No appointments booked yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
