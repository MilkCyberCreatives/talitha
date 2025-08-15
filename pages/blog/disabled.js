import { useRouter } from "next/router";
import { blogs } from "@/data/blogs";
import Head from "next/head";

export default function SingleBlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{blog.title} | Talitha Blog</title>
      </Head>
      <article className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-[#B2292E] mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{blog.date} by {blog.author}</p>
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: blog.content }} />
        
        {/* External Comments (Giscus) */}
        <div className="mt-16">
          <iframe
            src="https://giscus.app"
            title="Comments"
            width="100%"
            height="400px"
            className="border-none"
          />
        </div>
      </article>
    </>
  );
}
