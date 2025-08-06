import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

// Load Daisy font from public/fonts
const daisy = localFont({
  src: "../public/fonts/daisy.ttf",
  variable: "--font-daisy",
  display: "swap",
});

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="h-full w-full">
          <Image
            src="/images/hero.jpg"
            alt="Talitha Investment Holdings"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative bg-black/50 backdrop-blur-sm text-white p-10 max-w-4xl rounded-lg shadow-xl text-center space-y-8 mt-20 mx-4 border-t-2 border-b-2 border-[#80BC00]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Talitha Investment Holdings
        </motion.h1>

        {/* This line uses the Daisy font */}
        <motion.p
          className={`text-3xl md:text-4xl text-[#80BC00] ${daisy.variable} font-[var(--font-daisy)]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Shaping Prosperity Through Innovation
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-white/90"
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
              className="inline-block px-8 py-3 bg-transparent border-2 border-[#80BC00] text-[#80BC00] rounded-md text-sm md:text-base font-semibold hover:bg-[#80BC00] hover:text-white transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#80BC00",
                color: "#fff",
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
