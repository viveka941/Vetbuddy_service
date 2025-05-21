import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AppointmentForm() {
  const [message, setMessage] = useState();
  const [doctors, setDoctor] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const doctorList = async () => {
      try {
        const response = await axios.get(
          "http://15.207.115.177:5000/user/allUser"
        );
        console.log(response.data.user);
        const doctorList = response.data.user.filter((user)=>user.role=="Doctor")
        setDoctor(doctorList)
        //  setDoctor(response.data.user)
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    doctorList();
  }, []);

  console.log(doctors);

  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post(
        `http://15.207.115.177:5000/user/appointment/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        setMessage(response.data.message);
        if(response.data.success===true){
          navigate(`/dashboard/${id}`);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("server is not responded")
    }
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto p-6 bg-white shadow-md rounded mt-8"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1">Animal Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("animalName", { required: "Fill animal name" })}
          />
          <p className="text-red-700">{errors.animalName?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Book Date & Time</label>
          <input
            type="datetime-local"
            className="w-full border px-3 py-2 rounded"
            {...register("dateTime", {
              required: "Select appointment date and time",
            })}
          />
          <p className="text-red-700">{errors.dateTime?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Address </label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("address", {
              required: "fill the address",
            })}
          />
          <p className="text-red-700">{errors.address?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Doctor Name</label>

          <select
            className="w-full border px-3 py-2 rounded"
            {...register("DoctorName", { required: "Select a doctor" })}
          >
            <option value="">Select Doctor</option>
            {doctors.map((dr,index)=>(
              <option key={index} value={dr._id}>{dr.name}</option>
            ))}
          </select>
          {/* <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              {...register("DoctorName", { required: "Fill Doctor name" })}
            /> */}
          <p className="text-red-700">{errors.DoctorName?.message}</p>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Reason</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            {...register("reason", {
              required: "Provide a reason for visit",
            })}
          />
          <p className="text-red-700">{errors.reason?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <h3>{message}</h3>
      </form>
    </div>
  );
}
