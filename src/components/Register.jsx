import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { motion } from 'framer-motion';

const baseURL = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const formHandler = async () => {
    try {
      console.log("Submitting form data:", formData);
      const response = await axios.post(`${baseURL}/register`, {
        rollno: formData.rollNo,
        email: formData.email,
        name: formData.name,
        course: formData.course,
        phoneno: formData.phoneNo,
        role: formData.role,
        performance: formData.performance
      });
      console.log("Full response:", response);
      const res = response.data;
      console.log("Response from backend:", res);
      toast.success(res.message);

      setFormData({
        name: '',
        rollNo: '',
        course: '',
        email: '',
        phoneNo: '',
        role:'',
        performance:''
      });

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
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
    phoneNo: '',
    role:'',
    performance:''
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
    formHandler();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 py-2 sm:py-6 px-2 sm:px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[90%] sm:w-[85%] md:w-3/4 lg:w-2/5 h-auto min-h-[85vh] sm:min-h-[90vh] mx-auto 
                   bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] 
                   overflow-auto"
      >
        <div className="flex flex-col items-center justify-start h-full p-2 sm:p-6 md:p-8 gap-2 sm:gap-6">
          {/* Header Section - Further reduced spacing */}
          <div className="text-center w-full mb-1 sm:mb-6">
            <h2 className="regular text-lg sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-3">
              Join the Fiesta! 🎉
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm md:text-base px-1 sm:px-4">
              🎓 Only 1st-year students with a valid college ID card are allowed in the event ✅
            </p>
          </div>

          {/* Form Section - Reduced spacing and padding */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full space-y-3 sm:space-y-6 px-2 sm:px-4">
            {/* Input fields - Further reduced padding and size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 w-full">
              {/* Name and Roll Number */}
              <div className="input-group w-full">
                <label className="block text-xs sm:text-sm font-medium text-purple-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="regular w-full px-2 sm:px-4 py-1.5 sm:py-3 text-sm sm:text-base bg-white/10 
                           border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                           focus:ring-1 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-300 placeholder-purple-300/50"
                  placeholder="Enter your name"
                />
              </div>
                
              <div className="input-group w-full">
                <label className="block text-sm sm:text-base font-medium text-purple-200 mb-1 sm:mb-2">
                  Roll Number
                </label>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  required
                  className="regular w-full px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/10 
                           border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-300 placeholder-purple-300/50"
                  placeholder="Enter roll number"
                />
              </div>
            </div>
              
            {/* Course Input */}
            <div className="input-group w-full">
              <label className="block text-sm sm:text-base font-medium text-purple-200 mb-1 sm:mb-2">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="regular w-full px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/10 
                         border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         transition-all duration-300 placeholder-purple-300/50"
                placeholder="Your course name"
              />
            </div>
              
            {/* Role Selection */}
            <div className="input-group w-full">
              <label className="block text-sm sm:text-base font-medium text-purple-200 mb-1 sm:mb-2">
                Are you a participant or an audience?
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="regular w-full px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/10 
                         border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         transition-all duration-300 placeholder-purple-300/50"
                placeholder="participant / audience"
              />
            </div>
              
            {/* Performance Type */}
            <div className="input-group w-full">
              <label className="block text-sm sm:text-base font-medium text-purple-200 mb-1 sm:mb-2">
                If Participant, what are you performing? Otherwise type "N/A"
              </label>
              <input
                type="text"
                name="performance"
                value={formData.performance}
                onChange={handleChange}
                required
                className="regular w-full px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/10 
                         border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         transition-all duration-300 placeholder-purple-300/50"
                placeholder="Dance / Singing / Fashion Show / Nukkad Natak / N/A"
              />
            </div>
              
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
              <div className="input-group w-full">
                <label className="block text-sm sm:text-base font-medium text-purple-200 mb-1 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="regular w-full px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/10 
                           border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-300 placeholder-purple-300/50"
                  placeholder="XYZ@email.com"
                />
              </div>
                
              <div className="input-group w-full">
                <label className="block text-sm sm:text-base font-medium text-purple-200 mb-1 sm:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="regular w-full px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white/10 
                           border border-purple-300/30 text-white rounded-md sm:rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-300 placeholder-purple-300/50"
                  placeholder="10-digit number"
                />
              </div>
            </div>
              <br />
            {/* Submit Button - Reduced size */}
            <div className="w-full flex justify-center pt-1 sm:pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-[75%] sm:w-[60%] md:w-[50%] bg-gradient-to-r from-purple-500 to-indigo-600 
                         text-white py-2 sm:py-3 px-3 sm:px-6 rounded-md sm:rounded-lg 
                         font-medium text-sm sm:text-base shadow-md hover:shadow-purple-500/40 
                         transition-all duration-300 flex items-center justify-center gap-2"
              >
                Register Now 🎊
              </motion.button>
              <br />
              
            </div>
            <br />
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
