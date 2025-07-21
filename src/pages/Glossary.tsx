import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const terms = [
  { term: "Premium", definition: "The amount you pay for your insurance policy, typically monthly or annually." },
  { term: "Deductible", definition: "The amount you pay out of pocket before your insurance coverage begins." },
  { term: "Coverage", definition: "The protection provided by your insurance policy against specific risks or losses." },
  { term: "Beneficiary", definition: "The person or entity who receives the benefit from an insurance policy." },
  { term: "Claim", definition: "A request made to an insurance company for payment of a covered loss or policy event." },
  { term: "Policyholder", definition: "The person who owns the insurance policy." },
  { term: "Exclusion", definition: "Specific conditions or circumstances that are not covered by the insurance policy." },
  { term: "Underwriting", definition: "The process insurers use to evaluate risk and determine policy terms and pricing." },
];

const Glossary = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Insurance Glossary</h1>
        <p className="text-xl mb-6">Understand common insurance terms and definitions.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-6">
          {terms.map((item, idx) => (
            <Card key={idx} className="card-soft p-6">
              <h2 className="text-lg font-semibold mb-2">{item.term}</h2>
              <p className="text-muted-foreground">{item.definition}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Glossary; 