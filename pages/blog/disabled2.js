import BlogCard from "@/components/BlogCard";
import blogPosts from "@/data/blogData"; // We'll create this file next
import Head from "next/head";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Talitha Blog</title>
        <meta name="description" content="Explore insights, updates, and stories from Talitha Investment Holdings." />
      </Head>

      <section className="pt-24 pb-16 px-4 sm:px-8 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B2292E] mb-8 text-center">
            Insights from the Field
          </h1>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Discover expert articles, success stories, and the latest updates from Talitha Pharma, RED Academy, and our rural partners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
