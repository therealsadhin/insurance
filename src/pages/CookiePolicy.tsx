import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Cookie, Settings, Shield, Info } from "lucide-react";

const CookiePolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl leading-relaxed">
              Learn how we use cookies and similar technologies to enhance your browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What Are Cookies */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) 
                  when you visit our website. They help us provide you with a better experience by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing how our website is used</li>
                  <li>Providing personalized content and advertisements</li>
                  <li>Improving website functionality and performance</li>
                  <li>Ensuring security and preventing fraud</li>
                </ul>
              </div>
            </Card>

            {/* Types of Cookies We Use */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Types of Cookies We Use</h2>
              
              {/* Essential Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic functions 
                    like page navigation, access to secure areas, and form submissions. The website cannot function 
                    properly without these cookies.
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This helps us improve our website and provide better content.
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-muted-foreground">
                    These cookies are used to track visitors across websites to display relevant and engaging 
                    advertisements. They may also be used to limit the number of times you see an advertisement.
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <strong>Examples:</strong> Google AdSense, social media advertising, retargeting cookies
                  </div>
                </div>
              </div>

              {/* Preference Cookies */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Preference Cookies</h3>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                  <p className="text-muted-foreground">
                    These cookies allow our website to remember information that changes the way it behaves 
                    or looks, such as your preferred language or the region you are in.
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <strong>Examples:</strong> Language preferences, theme settings, location-based content
                  </div>
                </div>
              </div>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Cookies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our website may use third-party services that place cookies on your device. These services 
                  help us provide better functionality and analyze website usage:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Google Analytics</h4>
                    <p className="text-sm">
                      We use Google Analytics to understand how visitors use our website. Google Analytics 
                      uses cookies to collect information about your use of our website, including your IP address.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Google AdSense</h4>
                    <p className="text-sm">
                      We use Google AdSense to display advertisements. Google AdSense uses cookies to serve 
                      ads based on your visits to our site and other sites on the internet.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Social Media Platforms</h4>
                    <p className="text-sm">
                      Our website may include social media features that use cookies to track your activity 
                      and provide personalized content.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cookie Management */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You have several options for managing cookies on our website:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Browser Settings</h4>
                    <p className="text-sm">
                      Most web browsers allow you to control cookies through their settings. You can usually 
                      find these settings in the "Options" or "Preferences" menu of your browser.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Cookie Consent</h4>
                    <p className="text-sm">
                      When you first visit our website, you'll see a cookie consent banner that allows you 
                      to accept or decline non-essential cookies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Opt-Out Links</h4>
                    <p className="text-sm">
                      For third-party cookies, you can often opt out directly through the service provider's 
                      website or through industry opt-out programs.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded mt-6">
                  <h4 className="font-semibold text-foreground mb-2">Important Note</h4>
                  <p className="text-sm">
                    Disabling certain cookies may affect the functionality of our website. Essential cookies 
                    cannot be disabled as they are necessary for the website to work properly.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cookie Duration */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">How Long Do Cookies Last?</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">Session Cookies</h4>
                  <p className="text-sm">
                    These cookies are temporary and are deleted when you close your browser. They are used 
                    to maintain your session while you browse our website.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">Persistent Cookies</h4>
                  <p className="text-sm">
                    These cookies remain on your device for a set period or until you delete them. They are 
                    used to remember your preferences and settings for future visits.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">Third-Party Cookies</h4>
                  <p className="text-sm">
                    The duration of third-party cookies is determined by the respective service providers 
                    and may vary from a few days to several years.
                  </p>
                </div>
              </div>
            </Card>

            {/* Updates to Policy */}
            <Card className="card-soft p-6 border-l-4 border-l-blue-500">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Updates to This Policy</h3>
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong>Last updated:</strong> January 15, 2024
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="card-soft p-6 mt-8">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Questions About Cookies?</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at{' '}
                    <a href="mailto:privacy@insurancehub.com" className="text-primary hover:text-primary-hover">
                      privacy@insurancehub.com
                    </a>
                  </p>
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
            "name": "Cookie Policy - InsuranceHub",
            "description": "Learn how InsuranceHub uses cookies and similar technologies to enhance your browsing experience",
            "url": "https://insurancehub.com/cookie-policy",
            "mainEntity": {
              "@type": "Article",
              "name": "Cookie Policy",
              "description": "Comprehensive information about cookie usage, types, and management options"
            }
          })
        }}
      />
    </Layout>
  );
};

export default CookiePolicy; 