import { FiMail, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TopHeader() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime?.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-[#B2292E] to-[#D15B5F] text-white text-sm py-3 px-6 flex justify-between items-center shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center gap-6">
        <motion.div
          className="flex items-center gap-2"
          whileHover="hover"
          whileTap="tap"
          variants={itemVariants}
        >
          <FiMail className="text-[#80BC00] text-lg" />
          <a href="mailto:info@talitha.co.za" className="hover:underline transition-all duration-200">info@talitha.co.za</a>
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          whileHover="hover"
          whileTap="tap"
          variants={itemVariants}
        >
          <FiPhone className="text-[#80BC00] text-lg" />
          <a href="tel:+27123456789" className="hover:underline transition-all duration-200">+27 12 345 6789</a>
        </motion.div>
      </div>

      {currentTime && (
        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <span className="text-[#80BC00] font-medium">{timeString}</span>
            <span className="text-xs">{dateString}</span>
          </div>
          <motion.button
            className="bg-[#80BC00] hover:bg-[#6EA000] text-white px-4 py-1 rounded-full text-xs font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
