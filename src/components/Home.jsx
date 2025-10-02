import poster from '../assets/poster.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-8 sm:py-12 px-3 sm:px-6 flex flex-col items-center justify-center">
            <div className='flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12'>
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="paint text-3xl sm:text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg px-2"
                >
                     YRC Fresher Fiesta 
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group w-[92%] sm:w-[85%] md:w-[500px] mx-auto"
                >
                    <img 
                        src={poster} 
                        alt="Event Poster" 
                        className="w-full rounded-xl sm:rounded-2xl shadow-2xl 
                                 transform transition-all duration-500 
                                 group-hover:scale-[1.02] 
                                 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]" 
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                
                <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onClick={handleRegister}
                    className="relative inline-flex items-center justify-center 
                             px-6 sm:px-8 py-3 sm:py-4
                             bg-gradient-to-r from-purple-600 to-indigo-600
                             text-white text-base sm:text-lg font-medium rounded-full
                             transform transition-all duration-300
                             hover:from-purple-700 hover:to-indigo-700
                             hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                             active:scale-95 w-[160px] sm:w-[180px] h-[36px] sm:h-[40px]"
                >
                    <span className="relative regular">Register Now</span>
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-300 text-center mt-2 sm:mt-4 max-w-md mx-auto text-sm sm:text-base md:text-lg regular px-4"
                >
                    ✨ Welcome Freshers! Your journey begins with fun, music & lifelong memories 🎶🎉
                </motion.p>
            </div>
        </div>
    )
}

export default Home