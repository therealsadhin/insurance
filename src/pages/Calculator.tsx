import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Calculator = () => {
  const [form, setForm] = useState({
    age: '',
    coverage: '',
    term: '',
  });
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo calculation
    const base = 100;
    const ageFactor = Number(form.age) > 40 ? 1.5 : 1;
    const coverageFactor = Number(form.coverage) / 100000;
    const termFactor = Number(form.term) / 10;
    const premium = (base * ageFactor * coverageFactor * termFactor).toFixed(2);
    setResult(`Estimated Monthly Premium: $${premium}`);
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Insurance Calculator</h1>
          <p className="text-xl mb-6">Estimate your insurance premium in seconds.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <Card className="card-soft p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Age</label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                  min={18}
                  max={80}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Coverage Amount ($)</label>
                <input
                  type="number"
                  name="coverage"
                  value={form.coverage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                  min={10000}
                  step={10000}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Term Length (years)</label>
                <input
                  type="number"
                  name="term"
                  value={form.term}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                  min={5}
                  max={40}
                />
              </div>
              <Button type="submit" className="w-full">Calculate</Button>
            </form>
            {result && <div className="mt-6 text-lg font-semibold text-primary">{result}</div>}
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Calculator; 