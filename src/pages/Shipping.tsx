const Shipping = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We offer various shipping methods to ensure your products arrive safely and on time:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Shipping (5-7 business days):</strong> $15.00</li>
                <li><strong>Express Shipping (2-3 business days):</strong> $30.00</li>
                <li><strong>Next Day Delivery:</strong> $50.00</li>
                <li><strong>Free Shipping:</strong> Available on orders over $500</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <p className="text-muted-foreground">
              Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking information once your order has shipped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
            <p className="text-muted-foreground">
              We ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination. Customs duties and taxes may apply and are the responsibility of the recipient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
            <p className="text-muted-foreground">
              Once your order ships, you will receive an email with a tracking number. You can track your package through our website or the carrier's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Packaging</h2>
            <p className="text-muted-foreground">
              All products are carefully packaged to ensure they arrive in perfect condition. Our premium products come in elegant gift-ready packaging.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
