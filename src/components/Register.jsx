import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { motion } from 'framer-motion';

const baseURL = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const formHandler = async () => {
    try {
      const response = await axios.post(`${baseURL}/register`, {
        rollno: formData.rollNo,
        email: formData.email,
        name: formData.name,
        course: formData.course,
        phoneno: formData.phoneNo,
        role: formData.role,
        performance: formData.performance
      });
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 py-6 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl md:w-3/4 lg:w-2/5 h-auto min-h-[95vh] mx-auto bg-white/10 backdrop-blur-lg 
                   rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-auto flex justify-center"
      >
        <div className="flex flex-col justify-between h-[100%] p-6 sm:p-8 md:p-10 gap-6">
          <div className="text-center mb-6">
            <h2 className="regular text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Join the Fiesta! 🎉
            </h2>
            <p className="text-purple-200 text-sm sm:text-base md:text-lg">
🎓 Only 1st-year students with a valid college ID card are allowed in the event ✅            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 flex flex-col gap-5">
            {/* Bigger fields + labels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="input-group">
                <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className=" regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                             placeholder-purple-300/50"
                  placeholder="Enter your name"
                />
              </div>

              <div className="input-group">
                <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                  Roll Number
                </label>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  required
                  className="regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                             placeholder-purple-300/50"
                  placeholder="Enter roll number"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                placeholder="Your course name"
              />
            </div>

            <div className="input-group">
              <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                Are you a participant or an audience?
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                placeholder="participant / audience"
              />
            </div>

            <div className="input-group">
              <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                If Participant, what are you performing? Otherwise type "N/A"
              </label>
              <input
                type="text"
                name="performance"
                value={formData.performance}
                onChange={handleChange}
                required
                className="regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                           placeholder-purple-300/50"
                placeholder="Dance / Singing / Fashion Show / Nukkad Natak / N/A"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="input-group">
                <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                             placeholder-purple-300/50"
                  placeholder="XYZ@email.com"
                />
              </div>

              <div className="input-group">
                <label className="block text-base md:text-lg font-medium text-purple-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="regular w-full px-5 py-4 text-lg bg-white/10 border border-purple-300/30 text-white rounded-lg 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                             placeholder-purple-300/50"
                  placeholder="10-digit number"
                />
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="regular w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-6 rounded-lg
                           font-semibold text-lg sm:text-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300
                           flex items-center justify-center gap-2"
              >
                Register Now 🎊
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
