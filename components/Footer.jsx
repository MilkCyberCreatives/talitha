import { FaFacebookF, FaArrowUp, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111] text-gray-300 pt-14 pb-8 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-[#80BC00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Block K, Central Park, 400 16th Road,<br />Randjespark, Midrand, South Africa</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#80BC00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>011 3184 386</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#80BC00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@talitha-pharma.co.za</span>
              </p>
            </address>
            
            <div className="flex space-x-3 mt-6">
              <motion.a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:bg-[#80BC00] hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:bg-[#80BC00] hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:bg-[#80BC00] hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-3">
              {['Investment Holdings', 'RED Academy', 'Pharma Online', 'Talitha Pharma'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[#80BC00] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#80BC00] rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {['Contact Us', 'FAQ', 'Products', 'Support'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[#80BC00] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#80BC00] rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Our Newsletter</h4>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for updates on our products and services!
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-[#80BC00]"
                required
              />
              <button
                type="submit"
                className="bg-[#80BC00] hover:bg-[#6EA000] text-black font-medium py-3 px-6 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} <span className="font-bold text-[#80BC00]">Talitha Group</span>. All Rights Reserved
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-2 md:mt-0"
          >
            Developed by <span className="text-gray-400">Milk Cyber Creatives</span>
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#80BC00] hover:bg-[#6EA000] text-black p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  );
}