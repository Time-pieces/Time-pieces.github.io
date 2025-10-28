import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What products do you sell?",
      answer: "We specialize in authentic Japanese products including premium watches, electronics, and lifestyle items. All our products are sourced directly from reputable Japanese manufacturers and distributors."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. Shipping rates and delivery times vary by destination. International orders may be subject to customs duties and taxes."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Next Day Delivery is available for select locations. International shipping typically takes 7-14 business days depending on the destination."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Products must be unused, in original condition, and in their original packaging. Contact our customer service team to initiate a return."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic. We source directly from authorized distributors and manufacturers in Japan. Every product comes with authenticity documentation."
    },
    {
      question: "Do you offer warranty on watches?",
      answer: "Yes, all our watches come with manufacturer warranty ranging from 1-3 years depending on the brand. Some premium models include extended warranty options."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email with a tracking number. You can track your package through our website or directly on the carrier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and other secure payment methods. All transactions are encrypted and secure."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within 24 hours of placing it. Please contact our customer service team as soon as possible. Once an order has been processed and shipped, it cannot be cancelled."
    },
    {
      question: "Do you have a physical store?",
      answer: "We are an online-only retailer, which allows us to offer competitive prices and a wider selection. However, our customer service team is available to assist you via email, phone, or chat."
    },
    {
      question: "How do I care for my watch?",
      answer: "Each watch comes with specific care instructions. Generally, avoid exposing watches to extreme temperatures, magnets, and impacts. Regular servicing every 3-5 years is recommended for automatic watches."
    },
    {
      question: "Are there any customs or import fees?",
      answer: "For international orders, customs duties and import taxes may apply depending on your country's regulations. These fees are the responsibility of the recipient and are not included in our shipping charges."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Find answers to common questions about our products, shipping, and policies.
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            Our customer service team is here to help. Contact us and we'll get back to you within 24 hours.
          </p>
          <a href="/contact" className="text-accent hover:underline font-medium">
            Contact Us →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
