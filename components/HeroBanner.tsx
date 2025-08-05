import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4">
      {/* Enhanced Background Image */}
      <div className="absolute inset-0">
        <div className="h-full w-full">
          <Image
            src="/images/hero.jpg"
            alt="Talitha Investment Holdings"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            style={{
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative bg-black/50 border-2 border-[#80BC00] text-white p-8 sm:p-10 max-w-4xl rounded-md shadow-2xl text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Talitha Investment Holdings
        </motion.h1>

        <motion.p
          className="text-[#80BC00] italic text-lg md:text-xl font-medium drop-shadow-md"
          style={{ fontFamily: "Century Gothic, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Shaping Prosperity Through Innovation
        </motion.p>

        <motion.p
          className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Welcome to Talitha Investment Holdings, where innovation shapes prosperity and drives
          progress across diverse industries. With a particular focus on the pharmaceutical and
          livestock value chain sectors, we are committed to creating lasting socioeconomic growth
          and empowering rural communities for a sustainable future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link href="/investment/about" passHref legacyBehavior>
            <motion.a
              className="inline-block px-6 py-2 border border-[#80BC00] text-[#80BC00] rounded-md text-sm md:text-base font-semibold hover:bg-[#80BC00] hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#80BC00",
                color: "#fff"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Read More
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
