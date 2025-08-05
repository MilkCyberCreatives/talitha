import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
        {/* Text Column - now matches image height */}
        <motion.div 
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-[#80BC00] text-3xl md:text-4xl font-bold mb-2 uppercase tracking-tight">
              About Our Group
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Talitha group of companies is a dynamic, multi-faceted group dedicated to driving socioeconomic progress through innovation in pharmaceuticals and livestock value chains.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-[#80BC00] pl-4">
                Advisory Panel
              </h3>
              <p className="text-gray-700 text-base leading-relaxed md:text-lg">
                Talitha is guided by an esteemed advisory panel whose collective expertise spans animal health, rural development, finance, corporate governance, and strategic leadership. Their deep industry knowledge and proven track records in both public and private sectors provide the insight and oversight needed to scale operations, enhance product innovation, and drive sustainable growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Images Column - now matches text height */}
        <motion.div 
          className="flex-1 min-h-[400px] md:min-h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <Image
              src="/images/about/goat-panel.jpg"
              alt="Advisory Panel with Goats"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <Image
              src="/images/about/goat-herd.jpg"
              alt="Goat Herd"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}