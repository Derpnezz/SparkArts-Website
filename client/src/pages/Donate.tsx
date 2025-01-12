import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const donationSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

type DonationForm = z.infer<typeof donationSchema>;

export default function Donate() {
  const { toast } = useToast();
  const form = useForm<DonationForm>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: "",
      name: "",
      email: "",
    },
  });

  const donation = useMutation({
    mutationFn: async (data: DonationForm) => {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to process donation");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your donation!",
        description: "Your support helps us continue our mission.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process donation. Please try again.",
      });
    },
  });

  return (
    <div>
      <Navbar />
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
              <p className="text-lg text-gray-600">
                Your donation helps us continue bringing art to communities and supporting artists.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit((data) => donation.mutate(data))} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Donation Amount ($)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="100" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={donation.isPending}
                    >
                      {donation.isPending ? "Processing..." : "Donate Now"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}