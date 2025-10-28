const Returns = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Returns & Exchange Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">30-Day Return Policy</h2>
            <p className="text-muted-foreground">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, you may return it within 30 days of delivery for a full refund or exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Conditions</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>To be eligible for a return, items must meet the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Items must be unused and in their original condition</li>
                <li>Items must be in their original packaging</li>
                <li>Items must include all accessories and documentation</li>
                <li>Proof of purchase is required</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Return an Item</h2>
            <div className="space-y-4 text-muted-foreground">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our customer service team to initiate a return</li>
                <li>Receive your return authorization number</li>
                <li>Carefully package the item with all original materials</li>
                <li>Ship the item back using a trackable shipping method</li>
                <li>Receive your refund within 5-10 business days after we receive the item</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <p className="text-muted-foreground">
              If you would like to exchange an item for a different product, please contact our customer service team. We'll be happy to assist you with finding the perfect replacement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>The following items cannot be returned:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom or personalized items</li>
                <li>Items marked as final sale</li>
                <li>Gift cards</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Processing</h2>
            <p className="text-muted-foreground">
              Refunds will be issued to the original payment method. Please allow 5-10 business days for the refund to appear in your account after we receive and process your return.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;
