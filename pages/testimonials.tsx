import Head from "next/head";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  const partnerTestimonials = [
    {
      quote: "They know what they're doing and know what to do, more vigilant, more forceful, apply more pressure.",
      author: "Retailer",
    },
    {
      quote: "They service me best at the moment.",
      author: "Retailer",
    },
    {
      quote: "Their explanations to the farmers are brilliant.",
      author: "Retailer Training Manager",
    },
  ];

  const farmerTestimonials = [
    {
      quote: "Our one-month-old calf suddenly fell ill this afternoon & would not feed from its mom. At our desperate hour, I called Talitha Pharma… Within 10 mins, my family knew what to do. Thank you for a speedy, seamless & professional service. I'm sold!!! Keep up the great work!",
      author: "Farmer, legal practitioner",
    },
    {
      quote: "Let's support Talitha Pharma® because they are sponsoring an important training of emerging farmers, community visits, advice, etc.",
      author: "Farmer, Community Leader",
    },
    {
      quote: "It meets the needs of a modern farmer in an innovative way. The company is very fond of black excellence.",
      author: "Farmer",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Testimonials | Talitha Pharma</title>
        <meta
          name="description"
          content="What our partners and farmers say about Talitha Pharma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopHeader />
      <MainHeader />

      <main className="flex-grow px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#B2292E] mb-4">Client Testimonials</h1>
          <div className="w-20 h-0.5 bg-[#80BC00] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            At Talitha Pharma<sup>®</sup>, our commitment to excellence is reflected in the words of our valued partners and customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Partners Testimonials */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#B2292E] border-b pb-2 border-gray-200">Partner Experiences</h2>
            <div className="space-y-6">
              {partnerTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#B2292E]"
                >
                  <svg className="w-6 h-6 text-[#80BC00] mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
                  <p className="text-gray-600 mt-3 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Farmer Testimonials */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#B2292E] border-b pb-2 border-gray-200">Farmer Stories</h2>
            <p className="text-gray-700">
              Our farming community shares their experiences with our responsive support and commitment to agricultural excellence:
            </p>
            <div className="space-y-6">
              {farmerTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#80BC00]"
                >
                  <svg className="w-6 h-6 text-[#80BC00] mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
                  <p className="text-gray-600 mt-3 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}