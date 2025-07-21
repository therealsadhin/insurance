import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We provide accurate, unbiased information to help you make informed insurance decisions."
    },
    {
      icon: Users,
      title: "Expert Knowledge",
      description: "Our team consists of licensed insurance professionals with decades of combined experience."
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Every article is thoroughly researched and reviewed by industry experts for accuracy."
    },
    {
      icon: Target,
      title: "Your Success",
      description: "We're committed to helping you find the best insurance coverage at the most competitive rates."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Insurance Analyst",
      experience: "15+ years",
      specialization: "Auto & Home Insurance"
    },
    {
      name: "Michael Chen",
      role: "Health Insurance Expert",
      experience: "12+ years", 
      specialization: "Health & Life Insurance"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Insurance Specialist",
      experience: "10+ years",
      specialization: "Commercial Insurance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About InsuranceHub</h1>
            <p className="text-xl leading-relaxed">
              Your trusted partner in navigating the complex world of insurance. We're dedicated to providing 
              expert guidance, comprehensive resources, and unbiased information to help you make the best 
              insurance decisions for your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To simplify insurance for everyone by providing clear, accurate, and actionable information 
                that empowers individuals and businesses to protect what matters most.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="card-soft p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, InsuranceHub was born from a simple observation: people were struggling 
                to understand and compare insurance options in an increasingly complex marketplace. Our 
                founders, all licensed insurance professionals, recognized the need for a trusted resource 
                that could bridge the gap between industry expertise and consumer understanding.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small blog has grown into a comprehensive platform serving over 50,000 
                monthly readers. We've helped thousands of individuals and families make informed decisions 
                about their insurance coverage, saving them both money and stress.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to expand our resources and expertise, always with the same goal: 
                making insurance accessible, understandable, and beneficial for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Meet Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="card-soft p-6 text-center">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-primary-foreground/80">Monthly Readers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-primary-foreground/80">Expert Articles</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-primary-foreground/80">Reader Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-primary-foreground/80">Average Rating</div>
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
            "@type": "AboutPage",
            "name": "About InsuranceHub",
            "description": "Learn about InsuranceHub's mission to provide expert insurance guidance and comprehensive resources",
            "url": "https://insurancehub.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "InsuranceHub",
              "description": "Trusted partner in navigating the complex world of insurance",
              "foundingDate": "2020",
              "employees": "10-50"
            }
          })
        }}
      />
    </Layout>
  );
};

export default About;