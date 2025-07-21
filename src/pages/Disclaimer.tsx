import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Shield, Info } from "lucide-react";

const Disclaimer = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
            <p className="text-xl leading-relaxed">
              Important information about the use of our website and the accuracy of our content.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <Card className="card-soft p-6 mb-8 border-l-4 border-l-yellow-500">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground">
                    This disclaimer applies to all content, services, and information provided on InsuranceHub.com. 
                    Please read this disclaimer carefully before using our website.
                  </p>
                </div>
              </div>
            </Card>

            {/* General Disclaimer */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">General Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The information provided on InsuranceHub.com is for general informational and educational purposes only. 
                  While we strive to keep the information up to date and correct, we make no representations or warranties 
                  of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
                  of the information, products, services, or related graphics contained on the website for any purpose.
                </p>
                <p>
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will we be 
                  liable for any loss or damage including without limitation, indirect or consequential loss or damage, 
                  arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </div>
            </Card>

            {/* Insurance Information Disclaimer */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Insurance Information Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Not Professional Advice:</strong> The insurance information provided on this website is not intended 
                  to constitute professional insurance advice, legal advice, or financial advice. The content is provided 
                  for informational purposes only and should not be relied upon as a substitute for professional consultation.
                </p>
                <p>
                  <strong>Policy Variations:</strong> Insurance policies, coverage options, and regulations vary by state, 
                  insurance company, and individual circumstances. The information provided may not be applicable to your 
                  specific situation or location.
                </p>
                <p>
                  <strong>No Guarantees:</strong> We do not guarantee that the information provided will result in specific 
                  insurance coverage, rates, or outcomes. Actual insurance policies, premiums, and coverage are determined 
                  by insurance companies based on their underwriting criteria.
                </p>
              </div>
            </Card>

            {/* Third-Party Content */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Content and Links</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our website may contain links to third-party websites, advertisements, or content. We have no control 
                  over the nature, content, and availability of those sites. The inclusion of any links does not necessarily 
                  imply a recommendation or endorse the views expressed within them.
                </p>
                <p>
                  We are not responsible for the content, privacy policies, or practices of any third-party websites. 
                  Users should review the terms and conditions and privacy policies of any third-party sites they visit.
                </p>
              </div>
            </Card>

            {/* Accuracy and Updates */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Accuracy and Updates</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Information Accuracy:</strong> While we make reasonable efforts to ensure the accuracy of information 
                  on our website, we cannot guarantee that all information is current, accurate, or complete. Insurance 
                  laws, regulations, and policies change frequently, and information may become outdated.
                </p>
                <p>
                  <strong>Regular Updates:</strong> We strive to update our content regularly, but we do not guarantee 
                  that the information on our website is always current. Users should verify important information 
                  with official sources or qualified professionals.
                </p>
                <p>
                  <strong>Errors and Omissions:</strong> We do not warrant that the website will be error-free or that 
                  defects will be corrected. We reserve the right to make changes to the website content at any time 
                  without notice.
                </p>
              </div>
            </Card>

            {/* Limitation of Liability */}
            <Card className="card-soft p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by applicable law, InsuranceHub and its affiliates, officers, employees, 
                  agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, 
                  or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits, data, or use</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                  <li>Any damages resulting from the use or inability to use our website</li>
                  <li>Any damages resulting from reliance on information provided on our website</li>
                </ul>
              </div>
            </Card>

            {/* Professional Consultation */}
            <Card className="card-soft p-6 border-l-4 border-l-blue-500">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Professional Consultation Recommended</h3>
                  <p className="text-muted-foreground">
                    For specific insurance advice, policy recommendations, or legal matters, we strongly recommend 
                    consulting with licensed insurance professionals, attorneys, or financial advisors who can provide 
                    personalized guidance based on your individual circumstances and needs.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="card-soft p-6 mt-8">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Questions About This Disclaimer</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about this disclaimer or our website's terms of use, please contact us at{' '}
                    <a href="mailto:legal@insurancehub.com" className="text-primary hover:text-primary-hover">
                      legal@insurancehub.com
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
            "name": "Disclaimer - InsuranceHub",
            "description": "Important disclaimer information for InsuranceHub website users regarding content accuracy and liability limitations",
            "url": "https://insurancehub.com/disclaimer",
            "mainEntity": {
              "@type": "Article",
              "name": "Website Disclaimer",
              "description": "Comprehensive disclaimer covering information accuracy, liability limitations, and user responsibilities"
            }
          })
        }}
      />
    </Layout>
  );
};

export default Disclaimer; 