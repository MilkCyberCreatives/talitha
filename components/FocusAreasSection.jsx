import { motion } from "framer-motion";
import Image from "next/image";

const focusAreas = [
  {
    title: "Relevant Pharmaceuticals",
    description: "Through Talitha Pharma®, we source relevant and groundbreaking pharmaceuticals and enhance livestock farming practices, ensuring better health and production outcomes for both smallholder and commercial farmers.",
  },
  {
    title: "Sustainability Initiatives",
    description: "We implement sustainable practices within the livestock production systems, prioritizing environmental stewardship in a one health environment.",
  },
  {
    title: "Technology Integration",
    description: "By leveraging advanced technologies such as AI, IoT, and blockchain, we aim to optimize operations and supply chains, driving efficiency while maintaining high standards of quality and compliance.",
  },
  {
    title: "Job Creation, Skill & Enterprise Development",
    description: "Talitha® RED Academy initiatives lead to job opportunities and skill enhancement for residents in rural communities, empowering them with knowledge in modern farming and health practices; as well as facilitating better market access for rural enterprises and ensuring sustainable enterprise growth.",
  },
  {
    title: "Economic Diversification",
    description: "We encourage innovation that diversifies the rural economy, making communities more resilient to market changes and enhancing overall stability.",
  },
];

export default function FocusAreasSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-[#B2292E] text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#80BC00]">Focus</span> Areas
          </h2>
          <div className="w-20 h-1 bg-[#80BC00] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {focusAreas.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 p-6 hover:shadow-lg rounded-2xl transition-all duration-300 group"
            >
              <div className="flex-shrink-0 mt-1">
                <Image
                  src="/talitha-icon.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-[#B2292E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden shadow-md group"
          >
            <Image
              src="/images/focus-areas/cows.jpg"
              alt="Cows grazing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Livestock Health Solutions</h3>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden shadow-md group"
          >
            <Image
              src="/images/focus-areas/sheep.jpg"
              alt="Sheep farming"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Sustainable Practices</h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}