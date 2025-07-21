import { Link } from "react-router-dom";
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Company": [
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
    ],
    "Legal": [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
    "Insurance": [
      { name: "Auto Insurance", path: "/category/auto-insurance" },
      { name: "Home Insurance", path: "/category/home-insurance" },
      { name: "Health Insurance", path: "/category/health-insurance" },
      { name: "Life Insurance", path: "/category/life-insurance" },
    ],
    "Resources": [
      { name: "Insurance Calculator", path: "/calculator" },
      { name: "FAQ", path: "/faq" },
      { name: "Insurance Glossary", path: "/glossary" },
      { name: "Claims Guide", path: "/claims-guide" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span>InsuranceHub</span>
            </Link>
            <p className="text-sm text-background/80 mb-4 leading-relaxed">
              Your trusted source for comprehensive insurance information, expert advice, and the latest industry insights.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-INSURANCE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@insurancehub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Insurance St, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-background mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-background mb-2">Stay Updated</h3>
            <p className="text-sm text-background/80 mb-4">
              Subscribe to our newsletter for the latest insurance news and tips.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-foreground border border-background/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
                name="email"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-background/80">
              <p>© {currentYear} InsuranceHub. All rights reserved.</p>
              <p className="mt-1">
                Licensed insurance information provider. 
                <Link to="/disclaimer" className="hover:text-primary transition-colors ml-1">
                  See disclaimer
                </Link>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-background/80">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-background/80 hover:text-primary transition-colors p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InsuranceHub",
            "url": "https://insurancehub.com",
            "logo": "https://insurancehub.com/logo.png",
            "description": "Comprehensive insurance information and expert advice",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "1-800-INSURANCE",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://facebook.com",
              "https://twitter.com",
              "https://instagram.com",
              "https://linkedin.com"
            ]
          })
        }}
      />
    </footer>
  );
};

export default Footer;