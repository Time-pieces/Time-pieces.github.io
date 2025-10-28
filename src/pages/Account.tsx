import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Account = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="profile">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                </div>
                <Button className="bg-accent hover:bg-accent/90">Save Changes</Button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">Order #12345</p>
                      <p className="text-sm text-muted-foreground">May 15, 2025</p>
                    </div>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      Delivered
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">2 items • $899.98</p>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">Order #12344</p>
                      <p className="text-sm text-muted-foreground">May 10, 2025</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      In Transit
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">1 item • $599.99</p>
                  <Button variant="outline" size="sm">Track Order</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="addresses">
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Saved Addresses</h2>
              <div className="space-y-4 mb-6">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold mb-1">Home</p>
                      <p className="text-sm text-muted-foreground">
                        123 Main Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs">
                      Default
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </div>
              </div>
              <Button variant="outline">Add New Address</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
