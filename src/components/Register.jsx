import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { motion } from 'framer-motion'; // Add this import

const baseURL = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const formHandler = async () => {
    try {
      const response = await axios.post(`${baseURL}/register`, {
        rollno: formData.rollNo,
        email: formData.email,
        name: formData.name,
        course: formData.course,
        phoneno: formData.phoneNo
      });
      const res = response.data; // backend JSON response
      console.log("Response from backend:", res);
      toast.success(res.message);

       // Clear form fields after successful submission
      setFormData({
        name: '',
        rollNo: '',
        course: '',
        email: '',
        phoneNo: ''
      });

    } catch (error) {
          if (error.response) {
      // ✅ backend responded with an error status (400/409/500 etc.)
      toast.success(error.response.data.message);
    } else {
      // ❌ network / server down
     console.log("Network/server error:", error.message);
    }

      console.error("Error fetching:", error);
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    course: '',
    email: '',
    phoneNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add your form submission logic here
    formHandler();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 py-6 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl sm:max-w-3xl md:w-3/4 lg:w-2/5 h-auto max-h-[90vh] sm:max-h-[85vh] mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-auto flex justify-center"
      >
        <div className="flex flex-col justify-between h-full p-4 sm:p-6 md:p-8 gap-4">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
              Join the Fiesta! 🎉
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm">Register now for an unforgettable freshman experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-3">
            {/* Input field groups with improved styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
              <div className="input-group">
                <label className="block text-sm font-medium text-purple-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                  placeholder="Enter your name"
                />
              </div>

              <div className="input-group">
                <label className="block text-sm font-medium text-purple-200 mb-1">
                  Roll Number
                </label>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                  placeholder="Enter roll number"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="block text-sm font-medium text-purple-200 mb-1">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-purple-300/30 text-white rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                         placeholder-purple-300/50"
                placeholder="Your course name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
              <div className="input-group">
                <label className="block text-sm font-medium text-purple-200 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                  placeholder="your@email.com"
                />
              </div>

              <div className="input-group">
                <label className="block text-sm font-medium text-purple-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                  placeholder="10-digit number"
                />
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 sm:py-3 px-4 rounded-lg
                         font-medium text-base sm:text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300
                         flex items-center justify-center gap-2"
              >
                Register Now 
                <span role="img" aria-label="party">🎊</span>
              </motion.button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-purple-200">
            Join us for an amazing evening of fun and celebration! 
            <span role="img" aria-label="stars">✨</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;