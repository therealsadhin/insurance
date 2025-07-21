import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="card-soft p-12">
              <div className="text-6xl font-bold text-primary mb-6">404</div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you may have entered an incorrect URL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-insurance">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    <Search className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Pages</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link to="/" className="text-primary hover:text-primary-hover transition-colors">
                    Insurance Articles
                  </Link>
                  <Link to="/about" className="text-primary hover:text-primary-hover transition-colors">
                    About Us
                  </Link>
                  <Link to="/contact" className="text-primary hover:text-primary-hover transition-colors">
                    Contact Us
                  </Link>
                  <Link to="/privacy-policy" className="text-primary hover:text-primary-hover transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
