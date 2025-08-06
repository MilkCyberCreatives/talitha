import { FiMail, FiPhone } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="fixed top-0 w-full h-[48px] md:h-[52px] bg-gradient-to-r from-[#B2292E] to-[#D15B5F] text-white text-sm z-[60] border-b border-white/20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      role="banner"
      aria-label="Top header with contact information"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-full">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <motion.div
            className="flex items-center gap-2"
            whileHover="hover"
            whileTap="tap"
            variants={itemVariants}
          >
            <FiMail className="text-[#80BC00] text-lg" aria-hidden="true" />
            <a
              href="mailto:info@talitha.co.za"
              className="hover:underline transition-all duration-200"
              aria-label="Email us at info@talitha.co.za"
            >
              info@talitha.co.za
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover="hover"
            whileTap="tap"
            variants={itemVariants}
          >
            <FiPhone className="text-[#80BC00] text-lg" aria-hidden="true" />
            <a
              href="tel:+27123456789"
              className="hover:underline transition-all duration-200"
              aria-label="Call us at +27 12 345 6789"
            >
              +27 12 345 6789
            </a>
          </motion.div>
        </div>

        {/* Time and Date */}
        {currentTime && (
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <time dateTime={currentTime.toISOString()} className="text-[#80BC00] font-medium">
                {timeString}
              </time>
              <time dateTime={currentTime.toISOString()} className="text-xs">
                {dateString}
              </time>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
