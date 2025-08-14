import { FaFacebookF, FaArrowUp, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-gray-800 pb-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xl mb-5">Contact Us</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-[#80BC00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">Block K, Central Park, 400 16th Road,<br />Randjespark, Midrand, South Africa</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#80BC00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0113184386" className="hover:text-[#80BC00] transition-colors">011 3184 386</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[#80BC00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@talitha-pharma.co.za" className="hover:text-[#80BC00] transition-colors">info@talitha-pharma.co.za</a>
              </div>
            </address>
            
            <div className="flex space-x-3 mt-6">
              {[
                { icon: <FaFacebookF />, label: "Facebook", color: "hover:bg-[#3b5998]" },
                { icon: <FaLinkedinIn />, label: "LinkedIn", color: "hover:bg-[#0077b5]" },
                { icon: <FaTwitter />, label: "Twitter", color: "hover:bg-[#1da1f2]" },
                { icon: <FaInstagram />, label: "Instagram", color: "hover:bg-[#e1306c]" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`p-2.5 rounded-full border border-gray-700 hover:text-white transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xl mb-5">Information</h4>
            <ul className="space-y-3.5">
              {['Investment Holdings', 'RED Academy', 'Pharma Online', 'Talitha Pharma'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="hover:text-[#80BC00] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#80BC00] rounded-full mr-3 group-hover:mr-4 transition-all"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xl mb-5">Customer Service</h4>
            <ul className="space-y-3.5">
              {['Contact Us', 'FAQ', 'Products', 'Support'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="hover:text-[#80BC00] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#80BC00] rounded-full mr-3 group-hover:mr-4 transition-all"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xl mb-5">Our Newsletter</h4>
            <p className="text-gray-400 leading-relaxed">
              Subscribe to our newsletter for updates on our products and services!
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80BC00] focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#80BC00] hover:bg-[#6EA000] text-black font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
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
            className="text-center md:text-left"
          >
            © {new Date().getFullYear()} <span className="font-bold text-[#80BC00]">Talitha Pharma</span>. All Rights Reserved
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 md:mt-0"
          >
            <a href="#" className="hover:text-[#80BC00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#80BC00] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#80BC00] transition-colors">Cookie Policy</a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#80BC00] hover:bg-[#6EA000] text-black p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  );
}