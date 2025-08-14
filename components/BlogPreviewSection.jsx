import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShareAlt, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const blogData = [
  {
    id: 1,
    title: "5 Ways Agriculture is Transforming Rural Communities",
    slug: "agriculture-transforming-rural",
    excerpt:
      "Discover how modern farming practices are creating jobs, improving food security, and shaping local economies...",
    image: "/images/blog/agriculture-impact.jpg",
    date: "May 15, 2023",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Natural Remedies from the Farm: A Look at Herbal Solutions",
    slug: "herbal-solutions",
    excerpt:
      "Explore how organic farming techniques contribute to powerful natural healing through herbs and traditional methods...",
    image: "/images/blog/herbal-remedies.jpg",
    date: "June 2, 2023",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "From Farm to Pharma: How We're Connecting Agriculture and Health",
    slug: "farm-to-pharma",
    excerpt:
      "Talitha is building a sustainable bridge between agriculture and pharmaceutical innovation. Learn more about our mission...",
    image: "/images/blog/farm-pharma.jpg",
    date: "June 20, 2023",
    readTime: "5 min read",
  },
];

export default function BlogPreviewSection() {
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleShare = (platform, slug) => {
    // Build a safe URL at runtime (works on client only)
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://yourdomain.com";
    const url = `${origin}/blog/${slug}`;

    let shareUrl = "";
    switch (platform) {
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent("Check this out!")}`;
        break;
      default:
        return;
    }

    if (typeof window !== "undefined") {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#B2292E] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            From Our Blog
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Insights, stories, and innovation from our farm, community, and partners.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#B2292E] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <FaHeart className={likedPosts.includes(post.id) ? "text-red-500" : ""} />
                      <span className="text-sm">
                        {likedPosts.includes(post.id) ? "Liked" : "Like"}
                      </span>
                    </button>

                    <div className="relative group">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#80BC00] transition-colors">
                        <FaShareAlt />
                        <span className="text-sm">Share</span>
                      </button>

                      <div className="absolute bottom-full left-0 mb-2 hidden group-hover:flex bg-white shadow-lg rounded-lg p-2 space-x-2 z-10">
                        <button
                          onClick={() => handleShare("facebook", post.slug)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <FaFacebook />
                        </button>
                        <button
                          onClick={() => handleShare("twitter", post.slug)}
                          className="p-2 text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <FaTwitter />
                        </button>
                        <button
                          onClick={() => handleShare("whatsapp", post.slug)}
                          className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors"
                          aria-label="Share on WhatsApp"
                        >
                          <FaWhatsapp />
                        </button>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#80BC00] hover:text-[#B2292E] font-medium flex items-center transition-colors"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-[#80BC00] hover:bg-[#B2292E] text-white font-medium rounded-lg transition-colors duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
