import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Globe, Award, Coffee } from "lucide-react";

const Career = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs including gym memberships and mental health support."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development opportunities, mentorship programs, and tuition reimbursement for continuing education."
    },
    {
      icon: Globe,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, remote work options, generous PTO, and sabbatical programs."
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Market-competitive salaries, performance bonuses, stock options, and comprehensive retirement plans."
    },
    {
      icon: Coffee,
      title: "Great Culture",
      description: "Collaborative environment, team building events, free meals, and a commitment to diversity and inclusion."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Volunteer time off, charitable giving programs, and opportunities to make a positive impact in communities."
    }
  ];

  const openPositions = [
    {
      title: "Senior Insurance Content Writer",
      department: "Content & Marketing",
      location: "Remote / New York, NY",
      type: "Full-time",
      description: "Create engaging, SEO-optimized insurance content for our blog and digital platforms."
    },
    {
      title: "Insurance Data Analyst",
      department: "Research & Analytics",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Analyze insurance market trends and consumer behavior to inform content strategy."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Manage digital marketing campaigns and optimize our online presence."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      description: "Help our users get the most value from our insurance guidance and tools."
    },
    {
      title: "Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build and maintain our web platform and tools for insurance consumers."
    },
    {
      title: "Insurance Research Intern",
      department: "Research",
      location: "Remote",
      type: "Internship",
      description: "Support our research team in analyzing insurance products and market trends."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero font-bold mb-6 leading-tight">
              Join Our Mission to Simplify Insurance
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Help millions of people make better insurance decisions. Build your career with a team that's passionate about making insurance accessible, understandable, and affordable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building the future of insurance education and comparison. Join a team that values innovation, collaboration, and making a real difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="card-soft p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Transparency</h3>
              <p className="text-muted-foreground">We believe in honest, clear communication in everything we do, from our content to our workplace culture.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
              <p className="text-muted-foreground">We constantly seek new ways to improve how people understand and choose insurance products.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Empathy</h3>
              <p className="text-muted-foreground">We understand that insurance decisions are personal and important, and we approach every interaction with care.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Excellence</h3>
              <p className="text-muted-foreground">We strive for the highest quality in our content, products, and service to our users and each other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Explore opportunities to grow your career and make an impact in the insurance industry.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="card-soft p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                      <span>📍 {position.location}</span>
                      <span>🏢 {position.department}</span>
                      <span>⏰ {position.type}</span>
                    </div>
                    <p className="text-muted-foreground">{position.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button>Apply Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Hiring Process</h2>
            <p className="text-lg text-muted-foreground">
              We've designed our process to be thorough yet respectful of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Application Review</h3>
              <p className="text-sm text-muted-foreground">We review your application and resume within 3-5 business days.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Phone/Video Screen</h3>
              <p className="text-sm text-muted-foreground">Initial conversation with our recruiting team to discuss your background and interest.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Team Interviews</h3>
              <p className="text-sm text-muted-foreground">Meet with team members and hiring managers to discuss the role in detail.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Final Decision</h3>
              <p className="text-sm text-muted-foreground">We'll make a decision and get back to you within one week of your final interview.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals who share our passion for helping people with insurance decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              View All Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Send Us Your Resume
            </Button>
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
            "name": "Careers - InsuranceHub",
            "description": "Join our mission to simplify insurance. Explore career opportunities at InsuranceHub.",
            "url": "https://insurancehub.com/career",
            "publisher": {
              "@type": "Organization",
              "name": "InsuranceHub",
              "url": "https://insurancehub.com"
            }
          })
        }}
      />
    </Layout>
  );
};

export default Career;