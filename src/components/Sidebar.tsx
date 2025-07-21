import { Card } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Sidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const recentPosts = [
    {
      title: "Understanding Auto Insurance Deductibles",
      date: "Dec 15, 2024",
      slug: "auto-insurance-deductibles"
    },
    {
      title: "Home Insurance: What's Covered?",
      date: "Dec 12, 2024", 
      slug: "home-insurance-coverage"
    },
    {
      title: "Life Insurance vs Term Insurance",
      date: "Dec 10, 2024",
      slug: "life-vs-term-insurance"
    },
    {
      title: "Health Insurance Open Enrollment Tips",
      date: "Dec 8, 2024",
      slug: "health-insurance-enrollment"
    }
  ];

  const categories = [
    { name: "Auto Insurance", count: 24 },
    { name: "Home Insurance", count: 18 },
    { name: "Health Insurance", count: 32 },
    { name: "Life Insurance", count: 15 },
    { name: "Business Insurance", count: 12 },
  ];

  return (
    <aside className="space-y-6">
      {/* Advertisement Placeholder */}
      <Card className="card-soft">
        <div className="ad-placeholder">
          <div>
            <h4 className="font-medium mb-2">Advertisement</h4>
            <p className="text-xs">300x250 Google AdSense</p>
          </div>
        </div>
      </Card>

      {/* Social Media Links */}
      <Card className="card-soft p-6">
        <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </Card>

      {/* Recent Posts */}
      <Card className="card-soft p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.slug} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
              <h4 className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
            </article>
          ))}
        </div>
      </Card>

      {/* Categories */}
      <Card className="card-soft p-6">
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex justify-between items-center">
              <a 
                href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {category.name}
              </a>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Newsletter Signup */}
      <Card className="card-soft p-6">
        <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest insurance news and tips delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
          <button
            type="submit"
            className="w-full btn-insurance text-sm py-2"
          >
            Subscribe
          </button>
        </form>
      </Card>

      {/* Second Advertisement */}
      <Card className="card-soft">
        <div className="ad-placeholder">
          <div>
            <h4 className="font-medium mb-2">Advertisement</h4>
            <p className="text-xs">300x600 Google AdSense</p>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;