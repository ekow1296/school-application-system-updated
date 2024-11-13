"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for a program?",
    answer: "To apply, search for your desired program, click 'Apply Now', and follow the step-by-step application process. You'll need to provide academic documents and may need to pay an application fee.",
  },
  {
    question: "What documents do I need for my application?",
    answer: "Typically, you'll need academic transcripts, standardized test scores (like SAT/GRE), letters of recommendation, and a personal statement. Specific requirements vary by program.",
  },
  {
    question: "How can I track my application status?",
    answer: "Once you submit an application, you can track its status through your dashboard. You'll receive notifications about updates and any required actions.",
  },
  {
    question: "Are there application fees?",
    answer: "Application fees vary by institution. Some programs have application fees while others might be free. The exact fee will be shown before you submit your application.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}