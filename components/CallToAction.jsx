import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative bg-[url('/images/cta/sheep.jpg')] bg-cover bg-center text-white py-20 px-6">
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-6 border-t border-b border-[#80BC00] py-10 px-4 backdrop-blur-sm bg-black/40 rounded-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl leading-relaxed">
          We invite strategic partners and potential investors to join us in our mission. By collaborating
          with <strong>Talitha Investment Holdings</strong>, you can play a crucial role in driving advancements in the
          pharmaceutical and livestock sectors, while also fostering inclusive growth in rural communities.
          Together, we can create sustainable solutions that benefit the industry and uplift the
          communities we serve.
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 border-2 border-[#80BC00] text-[#80BC00] hover:bg-[#80BC00] hover:text-white transition-all duration-300 rounded shadow-lg font-semibold"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
