import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const TermsConditions = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm mt-4 text-primary-foreground/80">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-soft p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  By accessing and using InsuranceHub website ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">2. Use License</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on InsuranceHub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">3. Information Disclaimer</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The information on this website is provided for educational and informational purposes only. It should not be considered as professional insurance advice or a substitute for consultation with a licensed insurance professional.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Insurance needs vary by individual circumstances</li>
                  <li>State laws and regulations may affect coverage options</li>
                  <li>Policy terms and conditions may change</li>
                  <li>Always consult with a licensed agent before making decisions</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">4. Accuracy of Materials</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The materials appearing on InsuranceHub's website could include technical, typographical, or photographic errors. InsuranceHub does not warrant that any of the materials on its website are accurate, complete, or current. InsuranceHub may make changes to the materials contained on its website at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">5. Links</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  InsuranceHub has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by InsuranceHub of the site. Use of any such linked website is at the user's own risk.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">6. User Conduct</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  You agree not to use the website to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Collect personal information without consent</li>
                  <li>Engage in fraudulent activities</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">7. Privacy Policy</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">8. Termination</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In no event shall InsuranceHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on InsuranceHub's website, even if InsuranceHub or a InsuranceHub authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">10. Revisions and Errata</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The materials appearing on InsuranceHub's website could include technical, typographical, or photographic errors. InsuranceHub does not warrant that any of the materials on its website are accurate, complete, or current. InsuranceHub may make changes to the materials contained on its website at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">11. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The website and its original content, features, and functionality are and will remain the exclusive property of InsuranceHub and its licensors. The website is protected by copyright, trademark, and other laws.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">12. Governing Law</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">13. Changes to Terms</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">14. Contact Information</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground font-medium">InsuranceHub Legal Department</p>
                  <p className="text-muted-foreground">Email: legal@insurancehub.com</p>
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
            "name": "Terms & Conditions - InsuranceHub",
            "description": "Terms and conditions for using InsuranceHub's website and services",
            "url": "https://insurancehub.pages.dev/terms-conditions",
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

export default TermsConditions;