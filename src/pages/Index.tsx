import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Users, Award } from "lucide-react";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 6;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and paginate posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const featuredPost = blogPosts.find(post => post.featured);

  const stats = [
    { icon: TrendingUp, label: "Insurance Articles", value: "200+" },
    { icon: Users, label: "Monthly Readers", value: "50K+" },
    { icon: Award, label: "Expert Reviews", value: "100%" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero font-bold mb-6 leading-tight">
              Your Trusted Insurance Resource Hub
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Get expert insights, compare policies, and make informed decisions about auto, home, health, and life insurance with our comprehensive guides and latest industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                onClick={() => document.getElementById('latest-articles')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Featured Post */}
              {featuredPost && searchTerm === "" && currentPage === 1 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Featured Article</h2>
                  <BlogCard post={featuredPost} featured={true} />
                </div>
              )}

              {/* Latest Posts */}
              <div className="mb-8" id="latest-articles">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Insurance Articles'}
                </h2>
                
                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <Card className="card-soft p-8 text-center">
                    <div className="text-muted-foreground">
                      <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium mb-2">No articles found</h3>
                      <p>Try adjusting your search terms or browse our categories.</p>
                    </div>
                  </Card>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed About Insurance</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Subscribe to our newsletter for the latest insurance tips, industry news, and money-saving strategies.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              Subscribe to Newsletter
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "InsuranceHub",
            "description": "Comprehensive insurance information and expert advice",
            "url": "https://insurancehub.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://insurancehub.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Layout>
  );
};

export default Index;
