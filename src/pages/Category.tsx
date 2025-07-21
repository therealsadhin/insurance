import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 6;

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Convert slug to category name
  const categoryName = slug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  // Filter posts by category and search term
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = post.category.toLowerCase() === categoryName.toLowerCase();
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [categoryName, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  if (!slug) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">{categoryName}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{categoryName}</h1>
          <p className="text-lg text-muted-foreground">
            Explore comprehensive guides and expert insights about {categoryName.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Back Button */}
              <div className="mb-6">
                <Link to="/">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Articles</span>
                  </Button>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder={`Search ${categoryName} articles...`}
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Category Stats */}
              <div className="mb-8">
                <Card className="card-soft p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{categoryName} Articles</h3>
                      <p className="text-muted-foreground">
                        {filteredPosts.length} articles available
                        {searchTerm && ` (${filteredPosts.length} matching "${searchTerm}")`}
                      </p>
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {filteredPosts.length}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Articles Grid */}
              <div className="mb-8">
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
                      <p>
                        {searchTerm 
                          ? `No articles match "${searchTerm}" in ${categoryName}`
                          : `No articles available in ${categoryName} category`
                        }
                      </p>
                      {searchTerm && (
                        <Button 
                          variant="outline" 
                          onClick={() => setSearchTerm("")}
                          className="mt-4"
                        >
                          Clear Search
                        </Button>
                      )}
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

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${categoryName} - InsuranceHub`,
            "description": `Comprehensive ${categoryName.toLowerCase()} guides and expert insights`,
            "url": `https://insurancehub.com/category/${slug}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": filteredPosts.length,
              "itemListElement": filteredPosts.slice(0, 10).map((post, index) => ({
                "@type": "Article",
                "position": index + 1,
                "name": post.title,
                "description": post.excerpt,
                "url": `https://insurancehub.com/article/${post.slug}`
              }))
            }
          })
        }}
      />
    </Layout>
  );
};

export default Category;