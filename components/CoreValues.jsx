import { FaLightbulb, FaMedal, FaHandshake, FaUsers, FaShieldAlt, FaFire } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaLightbulb className="text-[#80BC00] text-3xl mb-4" />,
    title: "Innovation",
    description: "We cultivate an environment that fosters growth, continuous learning, and sustainable improvement, enabling us to embrace new ideas and adapt to change.",
  },
  {
    icon: <FaMedal className="text-[#80BC00] text-3xl mb-4" />,
    title: "Excellence",
    description: "While we acknowledge that perfection is unattainable, we are steadfast in our commitment to striving for excellence in everything we do, always raising the bar for ourselves and others.",
  },
  {
    icon: <FaHandshake className="text-[#80BC00] text-3xl mb-4" />,
    title: "Mutual Respect",
    description: "We cherish and nurture relationships with all stakeholders—suppliers, colleagues, and customers—grounded in mutual respect, trust, and understanding.",
  },
  {
    icon: <FaUsers className="text-[#80BC00] text-3xl mb-4" />,
    title: "Collaboration",
    description: "We believe that by working together—internally and externally—we can achieve far more than we could alone, driving meaningful impact and sustainable growth.",
  },
  {
    icon: <FaShieldAlt className="text-[#80BC00] text-3xl mb-4" />,
    title: "Integrity",
    description: "We uphold the highest standards of ethics, honesty, and accountability in all our dealings, ensuring trust and long-term success for all stakeholders.",
  },
  {
    icon: <FaFire className="text-[#80BC00] text-3xl mb-4" />,
    title: "Courage",
    description: "We take bold steps to innovate, challenge the status quo, and drive transformational change, ensuring continuous progress and sustainable development.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B2292E] mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#F9F9F9] p-6 rounded-md shadow hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-[#80BC00] font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
