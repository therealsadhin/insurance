import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm mt-4 text-primary-foreground/80">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-soft p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our contact form</li>
                  <li>Request insurance quotes</li>
                  <li>Create an account on our website</li>
                  <li>Participate in surveys or contests</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you newsletters and marketing communications</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure website security</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist in operating our website</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">4. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">5. Google AdSense</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our website uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your visits to our site and other sites on the internet. You may opt out of personalized advertising by visiting Google's Ads Settings.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">6. Data Security</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage practices</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Object to processing of your information</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">8. Children's Privacy</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">9. Changes to This Policy</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">10. Contact Us</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground font-medium">InsuranceHub Privacy Team</p>
                  <p className="text-muted-foreground">Email: privacy@insurancehub.com</p>
                  <p className="text-muted-foreground">Phone: 1-800-INSURANCE</p>
                  <p className="text-muted-foreground">Address: 123 Insurance Street, New York, NY 10001</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - InsuranceHub",
            "description": "InsuranceHub's privacy policy explaining how we collect, use, and protect your personal information",
            "url": "https://insurancehub.com/privacy-policy",
            "dateModified": lastUpdated,
            "publisher": {
              "@type": "Organization",
              "name": "InsuranceHub"
            }
          })
        }}
      />
    </Layout>
  );
};

export default PrivacyPolicy;