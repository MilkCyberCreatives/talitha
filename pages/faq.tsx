import Head from "next/head";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of livestock do your products cater to?",
      answer:
        "Our various products cater for all livestock, cattle, sheep, goats, pigs, chickens. We have a limited range of products that cater for companion animals as well. Besides the products listed on the site, we supply a broader range of products which are not on this website. For further assistance, contact us directly.",
    },
    {
      question: "What kinds of livestock health problems do your products help solve?",
      answer:
        "Our solutions target essential animal health and production issues, ensuring your livestock thrive under optimal conditions. The product range includes nutritional supplements, worm remedies, antiparasitic products, vaccines, etc., which are incorporated in our livestock health and production programme in a prudent and sustainable manner.",
    },
    {
      question: "How do your products and services help improve production?",
      answer:
        "We empower farmers to farm profitably and sustainably through our livestock health and production programme, which guarantees improvements in the following: Lambing, kidding, or calving rate; Weaning rate; Wool production (both quality and quantity).",
    },
    {
      question: "Can your products be used for both small-scale and large-scale farming?",
      answer:
        "Absolutely! Whether you're running a small farm or managing a large-scale operation, our products are tailored to meet the unique needs of farms of all sizes.",
    },
    {
      question: "What makes your livestock health programme unique?",
      answer:
        "Our programme focuses on enhancing key production metrics, ensuring that you achieve better outcomes for your livestock. It's not just about health—it's about helping you maximize profitability and sustainability.",
    },
    {
      question: "Do you provide guidance on how to use your products effectively?",
      answer:
        "Yes, we provide expert advice and recommendations to ensure you get the best results from our products. Our team is always here to support you in optimizing your livestock's health and production.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Ordering is simple! Visit our online store, browse our products, and add your desired items to the cart. Follow the checkout process, and your order will be on its way!",
    },
    {
      question: "What is your return or refund policy?",
      answer:
        "For details about returns or refunds, please refer to our Return Policy section on the website. If you have specific concerns, don't hesitate to contact our support team.",
    },
    {
      question: "How can I contact you if I have more questions?",
      answer:
        "You can reach us through the Contact Us page on our website or email us directly. Our team is always happy to assist you. We look forward to helping you achieve sustainable and profitable farming success!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>FAQ | Talitha Pharma</title>
        <meta
          name="description"
          content="Frequently asked questions about Talitha Pharma products and services"
        />
      </Head>

      <TopHeader />
      <MainHeader />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#B2292E] mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-[#80BC00] mx-auto mb-6"></div>
          <p className="text-gray-700 text-base sm:text-lg">
            Find answers to common questions about our products and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-6 border-b border-gray-200 last:border-none last:pb-0"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#B2292E] mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#B2292E] mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Contact our team for more information.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#80BC00] hover:bg-[#6EA000] text-white font-medium py-2 px-6 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
