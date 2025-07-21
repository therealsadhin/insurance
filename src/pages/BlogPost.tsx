import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { useState } from "react";

const fallbackImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [imgError, setImgError] = useState(false);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | InsuranceHub</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://insurancehub.pages.dev/blog/${post.slug}`} />
      </Helmet>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl mb-6">{post.excerpt}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="card-soft p-8">
            <div className="mb-6">
              <img
                src={imgError ? fallbackImage : post.image}
                alt={post.title}
                className="w-full h-80 object-cover rounded-lg"
                onError={() => setImgError(true)}
              />
            </div>
            <div className="mb-4 text-sm text-muted-foreground">
              <span>By {post.author}</span> | <span>{post.date}</span> | <span>{post.readTime}</span>
            </div>
            <div className="mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded mr-2 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost; 