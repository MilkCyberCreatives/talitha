import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const menuItems = [
    {
      title: "INVESTMENT HOLDINGS",
      path: "/investment",
      dropdown: [
        { href: "/investment/about", text: "About Us" },
        { href: "/investment/focus", text: "Our Focus Areas" },
        { href: "/investment/values", text: "Our Values" },
        { href: "/investment/culture", text: "Our Culture" },
        { href: "/investment/partnership", text: "Partnership and Investments" },
      ],
    },
    {
      title: "TALITHA PHARMA",
      path: "/pharma",
      dropdown: [
        { href: "/pharma/faq", text: "FAQ" },
        { href: "/pharma/story", text: "Our Story" },
        { href: "/pharma/testimonials", text: "Testimonials" },
        { href: "/pharma/products", text: "Products & Services" },
      ],
    },
    {
      title: "RED ACADEMY",
      path: "/academy",
      dropdown: [
        { href: "/academy/accreditations", text: "Our Accreditations" },
        { href: "/academy/livestock", text: "Livestock Skills Programmes" },
        { href: "/academy/branding", text: "Animal Branding & Wool Harvesting" },
        { href: "/academy/faq", text: "FAQs" },
      ],
    },
    {
      title: "PHARMA ONLINE",
      path: "/pharma-online",
      dropdown: [{ href: "/pharma-online/products", text: "Products" }],
    },
    { title: "BLOG", path: "/blog" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed top-[48px] md:top-[52px] left-0 w-full z-50 bg-[#B2292E] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">
        <Link href="/" onClick={closeAllMenus} className="flex items-center">
          <Image
            src="/talitha-white-logo.svg"
            alt="Talitha Logo"
            width={100}
            height={50}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm tracking-wider">
          {menuItems.map((item) => (
            <div key={item.title} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    className="flex items-center gap-1 py-2 px-1 rounded-md transition-all hover:text-white/90"
                  >
                    {item.title}
                    <motion.span
                      animate={{ rotate: openDropdown === item.title ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-white/80"
                    >
                      <FiChevronDown className="ml-1" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-1 w-56 bg-white text-[#B2292E] shadow-lg rounded-md overflow-hidden z-50 border border-white/10"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                            onClick={closeAllMenus}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.path}
                  className="py-2 px-1 rounded-md transition-colors hover:text-white/90"
                  onClick={closeAllMenus}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#B2292E] text-white overflow-hidden border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-2 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-white/10 last:border-0">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex justify-between items-center w-full py-3 text-base font-medium"
                      >
                        <span>{item.title}</span>
                        <motion.span
                          animate={{ rotate: openDropdown === item.title ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-white/80"
                        >
                          <FiChevronDown />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="pl-4 overflow-hidden"
                          >
                            <div className="space-y-1 py-1">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block py-2.5 text-sm hover:bg-white/10 transition-colors pl-4 border-l-2 border-white/20"
                                  onClick={closeAllMenus}
                                >
                                  {subItem.text}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="block py-3 text-base font-medium hover:bg-white/10 transition-colors"
                      onClick={closeAllMenus}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
