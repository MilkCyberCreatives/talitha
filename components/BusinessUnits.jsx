import { FaInfinity, FaPills, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const units = [
  {
    icon: <FaInfinity className="text-[#80BC00] text-2xl" />,
    title: "Talitha Investment Holdings",
    href: "/investment/about",
  },
  {
    icon: <FaPills className="text-[#80BC00] text-2xl" />,
    title: "Talitha Pharma",
    href: "/pharma",
  },
  {
    icon: <FaGraduationCap className="text-[#80BC00] text-2xl" />,
    title: "Talitha RED Academy",
    href: "/red-academy",
  },
  {
    icon: <FaGlobe className="text-[#80BC00] text-2xl" />,
    title: "Talitha Pharma Online",
    href: "/pharma-online",
  },
];

export default function BusinessUnits() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Explore Our Divisions
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Talitha operates through specialized units, each driving innovation and impact in their field.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {units.map((unit, index) => (
          <motion.a
            href={unit.href}
            key={index}
            className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {unit.icon}
            <span className="text-[#80BC00] font-semibold text-sm md:text-base">
              {unit.title}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
