import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "1-800-INSURANCE",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@insurancehub.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Insurance Street",
      description: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri 9AM-6PM EST",
      description: "Sat-Sun: Closed"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              Have questions about insurance? Need expert advice? We're here to help. 
              Get in touch with our team of licensed insurance professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.title} className="card-soft p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="card-soft p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="auto">Auto Insurance</option>
                      <option value="home">Home Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="business">Business Insurance</option>
                      <option value="quote">Request Quote</option>
                      <option value="feedback">Website Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-vertical"
                      placeholder="Please describe your question or inquiry in detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-insurance flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <Card className="card-soft p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Expert insurance advice from licensed professionals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Personalized recommendations based on your needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Free quotes and policy comparisons</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Help with claims and policy questions</span>
                    </li>
                  </ul>
                </Card>

                <Card className="card-soft p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Response Times</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email inquiries:</span>
                      <span className="font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone calls:</span>
                      <span className="font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quote requests:</span>
                      <span className="font-medium">Within 2 hours</span>
                    </div>
                  </div>
                </Card>

                <Card className="card-soft p-6 bg-primary text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                  <p className="mb-4">
                    For urgent insurance questions or claims assistance, call us directly at:
                  </p>
                  <div className="text-2xl font-bold mb-2">1-800-INSURANCE</div>
                  <p className="text-sm text-primary-foreground/80">
                    Available Monday-Friday, 9AM-6PM EST
                  </p>
                </Card>
              </div>
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
            "@type": "ContactPage",
            "name": "Contact InsuranceHub",
            "description": "Get in touch with our expert insurance team for personalized advice and quotes",
            "url": "https://insurancehub.pages.dev/contact",
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": "1-800-INSURANCE",
              "email": "info@insurancehub.com",
              "contactType": "customer service",
              "availableLanguage": "English",
              "hoursAvailable": "Mo-Fr 09:00-18:00"
            }
          })
        }}
      />
    </Layout>
  );
};

export default Contact;