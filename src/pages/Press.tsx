import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, FileText, Image, Users, Calendar } from "lucide-react";

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "InsuranceHub Launches Comprehensive Digital Insurance Platform",
      date: "January 15, 2024",
      excerpt: "Leading insurance information provider introduces new digital platform to help consumers make informed insurance decisions.",
      category: "Company News"
    },
    {
      id: 2,
      title: "InsuranceHub Partners with Major Insurance Carriers for Enhanced Quote Comparison",
      date: "December 20, 2023",
      excerpt: "Strategic partnerships enable real-time quote comparisons across multiple insurance providers.",
      category: "Partnerships"
    },
    {
      id: 3,
      title: "New Study Reveals Insurance Knowledge Gap Among Millennials",
      date: "November 28, 2023",
      excerpt: "Research shows 65% of millennials lack basic understanding of insurance coverage options.",
      category: "Research"
    },
    {
      id: 4,
      title: "InsuranceHub Appoints Sarah Johnson as Chief Content Officer",
      date: "October 15, 2023",
      excerpt: "Industry veteran brings 15+ years of insurance expertise to lead content strategy and educational initiatives.",
      category: "Leadership"
    },
    {
      id: 5,
      title: "InsuranceHub Receives 'Best Insurance Information Website' Award",
      date: "September 22, 2023",
      excerpt: "Recognition from Insurance Industry Association for excellence in consumer education and transparency.",
      category: "Awards"
    }
  ];

  const mediaResources = [
    {
      title: "Company Logo",
      description: "High-resolution InsuranceHub logo in various formats",
      formats: ["PNG", "SVG", "JPG"],
      size: "2.1 MB"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of InsuranceHub leadership team",
      formats: ["JPG", "PNG"],
      size: "8.5 MB"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand style guide and usage guidelines",
      formats: ["PDF"],
      size: "3.2 MB"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our platform and tools",
      formats: ["PNG", "JPG"],
      size: "12.1 MB"
    }
  ];

  const teamMembers = [
    {
      name: "Michael Chen",
      title: "CEO & Founder",
      bio: "Former insurance executive with 20+ years of industry experience",
      email: "michael.chen@insurancehub.com"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Content Officer",
      bio: "Insurance education expert and former industry regulator",
      email: "sarah.johnson@insurancehub.com"
    },
    {
      name: "David Brown",
      title: "Chief Technology Officer",
      bio: "Technology leader specializing in insurance platforms and digital solutions",
      email: "david.brown@insurancehub.com"
    },
    {
      name: "Emily Rodriguez",
      title: "VP of Marketing",
      bio: "Marketing strategist with expertise in insurance consumer education",
      email: "emily.rodriguez@insurancehub.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Press Room</h1>
            <p className="text-xl leading-relaxed">
              Media resources, press releases, and contact information for journalists and media professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Press Contact Card */}
            <Card className="card-soft p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Press Contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Press Inquiries</p>
                        <a href="mailto:press@insurancehub.com" className="text-primary hover:text-primary-hover">
                          press@insurancehub.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Media Hotline</p>
                        <a href="tel:1-800-INSURANCE" className="text-primary hover:text-primary-hover">
                          1-800-INSURANCE
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">About InsuranceHub</h3>
                  <p className="text-muted-foreground mb-4">
                    InsuranceHub is a leading digital platform dedicated to helping consumers make informed 
                    insurance decisions through comprehensive educational content, expert advice, and 
                    transparent comparison tools.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground">Founded</p>
                      <p className="text-muted-foreground">2018</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Headquarters</p>
                      <p className="text-muted-foreground">New York, NY</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Employees</p>
                      <p className="text-muted-foreground">150+</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Monthly Visitors</p>
                      <p className="text-muted-foreground">2M+</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Press Releases */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Latest Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <Card key={release.id} className="card-soft p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {release.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{release.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{release.title}</h3>
                        <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          Read Full Release
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Media Resources */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Media Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mediaResources.map((resource, index) => (
                  <Card key={index} className="card-soft p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-3">{resource.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-muted-foreground">
                            <strong>Formats:</strong> {resource.formats.join(", ")}
                          </span>
                          <span className="text-muted-foreground">
                            <strong>Size:</strong> {resource.size}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="card-soft p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.title}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-sm text-primary hover:text-primary-hover font-medium"
                    >
                      {member.email}
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Press Kit Download */}
            <Card className="card-soft p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Complete Press Kit</h2>
                <p className="text-primary-foreground/90 mb-6">
                  Download our complete press kit containing all media resources, company information, 
                  and press releases in one convenient package.
                </p>
                <Button size="lg" variant="secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Download Press Kit (45.2 MB)
                </Button>
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
            "name": "Press Room - InsuranceHub",
            "description": "Media resources, press releases, and contact information for journalists covering InsuranceHub",
            "url": "https://insurancehub.com/press",
            "mainEntity": {
              "@type": "Organization",
              "name": "InsuranceHub",
              "description": "Leading digital insurance platform and information provider"
            }
          })
        }}
      />
    </Layout>
  );
};

export default Press; 