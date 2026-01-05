import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const Validate = () => {
  const { rollno } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${VITE_BASE_URL}/validate/${rollno}`);
        setResult(res.data);
        // setUserDetails(res.data.user);
        console.log("Validation result:", res.data);
      } catch (error) {
        console.error("Error fetching validation data:", error);
        setResult({ valid: false, message: "❌ Server error" });
      }
    };
    fetchData();
  }, [rollno]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {result ? (
        <div
          className={`p-6 rounded-xl shadow-lg text-center ${
            result.valid ? "bg-green-200" : "bg-red-200"
          }`}
        >
          <h1 className="text-2xl font-bold">
            {result.valid ? "✅ Registered User" : "❌ Not Registered"}
          </h1>
          {result.valid && (
            <div className="mt-4 space-y-2">
              <p className="font-medium">Name: {result.user.name}</p>
              <p>Roll No: {result.user.rollno}</p>
              <p>Course: {result.user.course}</p>
              <p>Email: {result.user.email}</p>
              <p>Phone No: {result.user.phoneno}</p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500">⏳ Validating...</p>
      )}
    </div>
  );
}

export default Validate

