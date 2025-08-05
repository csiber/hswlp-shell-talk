import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqs = [
  {
    question: "When will the video calls launch?",
    answer: "Soon, the backend is currently under development.",
  },
  {
    question: "Do I need any software to use HSWLP:Talk?",
    answer: "No, everything runs directly in your browser.",
  },
  {
    question: "How do credits work?",
    answer: "You will spend credits per call minute. Top-up options are coming soon.",
  },
  {
    question: "Is there mobile support?",
    answer: "Yes, the platform is fully responsive.",
  },
  {
    question: "Will call recording be available?",
    answer: "Recording is a planned option for the future.",
  },
  {
    question: "Can I use it for enterprise?",
    answer: "Enterprise features will be available in the Enterprise plan.",
  },
];

export default function FAQPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

