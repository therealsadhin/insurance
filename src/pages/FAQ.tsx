import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "What types of insurance do you cover?",
    answer: "We provide information and guides on auto, home, health, life, and business insurance, as well as specialty insurance products."
  },
  {
    question: "How do I get an insurance quote?",
    answer: "You can use our comparison tools or contact insurance providers directly through our platform to receive personalized quotes."
  },
  {
    question: "Is InsuranceHub an insurance company?",
    answer: "No, InsuranceHub is an educational platform. We do not sell insurance but help you make informed decisions."
  },
  {
    question: "How often is your content updated?",
    answer: "Our team regularly reviews and updates content to ensure accuracy and relevance."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us via the Contact Us page or email us at info@insurancehub.com."
  }
];

const FAQ = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl mb-6">Find answers to common questions about insurance and our platform.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="card-soft p-6">
              <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
              <p className="text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ; 