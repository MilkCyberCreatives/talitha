import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import HeroBanner from "@/components/HeroBanner";
import AboutUsSection from "@/components/AboutUsSection";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number]
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <>
      <Head>
        <title>Talitha Farm | Fresh Organic Produce</title>
        <meta name="description" content="Talitha Farm - Premium organic farm products" />
        <link rel="icon" href="/talitha-icon.svg" type="image/svg+xml" />
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen flex flex-col"
      >
        {/* Top header with contact info and time */}
        <TopHeader />

        {/* Main navigation bar */}
        <MainHeader />

        {/* Hero Banner Section */}
        <motion.main
          className="flex-grow bg-gradient-to-b from-white to-green-50"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <HeroBanner />
          <AboutUsSection />
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="bg-[#B2292E] text-white py-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Talitha Pharma. All rights reserved.</p>
          </div>
        </motion.footer>
      </motion.div>
    </>
  );
}
