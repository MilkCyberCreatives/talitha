import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const blogData = [
  {
    id: 1,
    title: "5 Ways Agriculture is Transforming Rural Communities",
    slug: "agriculture-transforming-rural",
    excerpt: "Discover how modern farming practices are creating jobs, improving food security, and shaping local economies...",
    image: "/images/blog/agriculture-impact.jpg",
  },
  {
    id: 2,
    title: "Natural Remedies from the Farm: A Look at Herbal Solutions",
    slug: "herbal-solutions",
    excerpt: "Explore how organic farming techniques contribute to powerful natural healing through herbs and traditional methods...",
    image: "/images/blog/herbal-remedies.jpg",
  },
  {
    id: 3,
    title: "From Farm to Pharma: How We’re Connecting Agriculture and Health",
    slug: "farm-to-pharma",
    excerpt: "Talitha is building a sustainable bridge between agriculture and pharmaceutical innovation. Learn more about our mission...",
    image: "/images/blog/farm-pharma.jpg",
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
    const url = `https://yourdomain.com/blog/${slug}`;
    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check this out!`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B2292E] mb-4">
          From Our Blog
        </h2>
        <p className="text-gray-600 mb-12">
          Insights, stories, and innovation from our farm, community, and partners.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {blogData.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-md overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#B2292E] mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-grow">{post.excerpt}</p>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-4 text-gray-500">
                    <FaHeart
                      className={`cursor-pointer transition ${
                        likedPosts.includes(post.id) ? "text-red-500" : ""
                      }`}
                      onClick={() => handleLike(post.id)}
                    />
                    <FaShareAlt className="cursor-pointer" />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShare("whatsapp", post.slug)}
                        className="text-sm hover:underline"
                      >
                        WhatsApp
                      </button>
                      <button
                        onClick={() => handleShare("facebook", post.slug)}
                        className="text-sm hover:underline"
                      >
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare("twitter", post.slug)}
                        className="text-sm hover:underline"
                      >
                        Twitter
                      </button>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#80BC00] hover:underline text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
