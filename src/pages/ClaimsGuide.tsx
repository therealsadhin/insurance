import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Step 1: Review Your Policy",
    description: "Understand your coverage, deductibles, and exclusions before filing a claim."
  },
  {
    title: "Step 2: Gather Documentation",
    description: "Collect all necessary documents such as receipts, photos, and police reports if applicable."
  },
  {
    title: "Step 3: Notify Your Insurer",
    description: "Contact your insurance company as soon as possible to report the incident."
  },
  {
    title: "Step 4: Complete Claim Forms",
    description: "Fill out the required claim forms provided by your insurer accurately and completely."
  },
  {
    title: "Step 5: Work with Adjuster",
    description: "An insurance adjuster may contact you to assess the damage and verify your claim."
  },
  {
    title: "Step 6: Track Your Claim",
    description: "Stay in touch with your insurer and track the progress of your claim until it is resolved."
  },
  {
    title: "Step 7: Receive Payment",
    description: "Once approved, your insurer will issue payment according to your policy terms."
  }
];

const ClaimsGuide = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Claims Guide</h1>
        <p className="text-xl mb-6">Step-by-step instructions to help you file an insurance claim.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="card-soft p-6">
              <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ClaimsGuide; 