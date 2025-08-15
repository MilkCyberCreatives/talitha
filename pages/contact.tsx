import Head from "next/head";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Contact Us | Talitha Pharma</title>
        <meta name="description" content="Get in touch with Talitha Pharma – Contact details and inquiry form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopHeader />
      <MainHeader />

      <main className="flex-grow">
        {/* Quote Section - Clean and Corporate */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 italic">
              "A man who calls his kinsmen to a feast does not do so to save them from starving. They all have food in their own homes. When we gather together in the moonlit village ground it's not because of the moon. Every man can see it in his own compound. We come together because it is good for kinsmen to do so"
              <span className="block mt-2 not-italic text-gray-700">— Chinua Achebe, Things Fall Apart</span>
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#B2292E]">Get in touch</h1>
            <div className="w-20 h-0.5 bg-[#80BC00] mx-auto mt-4"></div>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Clean Layout */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-[#B2292E] mb-2">Head Office</h2>
                <address className="text-gray-700 not-italic">
                  Block K (west entrance), Central Park<br />
                  400 14th Road, Randjespark<br />
                  Midrand, South Africa
                </address>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-[#B2292E] mb-2">Eastern Cape Office</h2>
                <address className="text-gray-700 not-italic">
                  Shop no.8, 6 Smith Street<br />
                  King William's Town<br />
                  South Africa
                </address>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-[#B2292E] mb-2">Email</h2>
                <a href="mailto:info@talitha.co.za" className="text-gray-700 hover:text-[#80BC00]">
                  info@talitha.co.za
                </a>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-[#B2292E] mb-2">Call</h2>
                <a href="tel:+27113184386" className="text-gray-700 hover:text-[#80BC00]">
                  011 3184 386
                </a>
              </div>
            </div>

            {/* Contact Form - Clean Design */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#80BC00]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#80BC00]"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#80BC00]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#80BC00]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#80BC00] hover:bg-[#6ea000] text-white font-medium py-3 px-6 rounded transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Full-width Google Map (1080p) */}
        <div className="w-full h-[400px]">
          <iframe
            title="Talitha Pharma Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114579.25237421167!2d27.90854721075468!3d-26.204102818337316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509a2cd7917d3%3A0x3ab819f50ab6e370!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1699999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-label="Google Maps showing Talitha Pharma location"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}