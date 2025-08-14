import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

export default function TopHeader() {
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

  const socialIconVariants: Variants = {
    hover: { 
      scale: 1.2,
      color: "#B2292E",
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div
      className="fixed top-0 w-full h-[48px] md:h-[52px] bg-white text-gray-800 text-sm z-[60] border-b border-gray-200 shadow-sm"
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
            <FiMail className="text-[#B2292E] text-lg" aria-hidden="true" />
            <a
              href="mailto:info@talitha.co.za"
              className="hover:underline transition-all duration-200 hover:text-[#B2292E]"
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
            <FiPhone className="text-[#B2292E] text-lg" aria-hidden="true" />
            <a
              href="tel:+27123456789"
              className="hover:underline transition-all duration-200 hover:text-[#B2292E]"
              aria-label="Call us at +27 12 345 6789"
            >
              +27 12 345 6789
            </a>
          </motion.div>
        </div>

        {/* Social Media Icons - Correct Order */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Facebook */}
          <motion.a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#B2292E]"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Visit our Facebook page"
          >
            <FaFacebookF className="text-lg" />
          </motion.a>
          
          {/* Instagram */}
          <motion.a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#B2292E]"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Visit our Instagram profile"
          >
            <FaInstagram className="text-lg" />
          </motion.a>
          
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#B2292E]"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Visit our LinkedIn page"
          >
            <FaLinkedinIn className="text-lg" />
          </motion.a>
          
          {/* X (formerly Twitter) */}
          <motion.a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#B2292E]"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Visit our X (Twitter) profile"
          >
            <FaXTwitter className="text-lg" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}