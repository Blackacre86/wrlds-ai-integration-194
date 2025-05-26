import React from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const phoneRegex = /^(\+\d{1,3}[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(50, {
    message: "Name cannot exceed 50 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().regex(phoneRegex, {
    message: "Please enter a valid phone number (e.g., (555) 123-4567).",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message cannot exceed 1000 characters."
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onBlur", // Validate fields when they lose focus
  });

  function onSubmit(data: ContactFormValues) {
    toast({
      title: "Contact request submitted",
      description: "We will get back to you as soon as possible.",
    });
    console.log(data);
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Contact Summit Law | Criminal Defense Attorneys</title>
        <meta name="description" content="Contact Summit Law for expert criminal defense representation. Our experienced team is ready to help with your legal needs. Reach out today for a free consultation." />
        <meta name="keywords" content="criminal defense lawyer, contact attorney, legal consultation, Summit Law, Massachusetts attorney" />
        <meta property="og:title" content="Contact Summit Law | Criminal Defense Attorneys" />
        <meta property="og:description" content="Get in touch with Summit Law's expert criminal defense team. We're ready to help with your legal needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://summitlawoffices.com/contact" />
        <link rel="canonical" href="https://summitlawoffices.com/contact" />
      </Helmet>
      
      <StructuredData 
        type="LegalService"
        title="Contact Summit Law | Criminal Defense Attorneys"
        description="Get in touch with Summit Law's expert criminal defense team. We're ready to help with your legal needs."
        url="https://summitlawoffices.com/contact"
      />
      
      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Contact Summit Law
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-blue-100">
              Let's discuss how we can help with your criminal defense needs
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-800">Get in Touch</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">
                    Your message has been successfully submitted. One of our attorneys will contact you shortly.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline"
                    className="border-green-500 text-green-700 hover:bg-green-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="border-blue-300 focus:border-blue-500" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="border-blue-300 focus:border-blue-500" {...field} />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-xs text-gray-500">
                            We'll never share your email with anyone else.
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" className="border-blue-300 focus:border-blue-500" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your situation" 
                              className="border-blue-300 focus:border-blue-500 min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-xs text-gray-500">
                            <div className="flex items-center">
                              <span className="mr-2">{field.value.length || 0}/1000</span>
                              <span>All communications are confidential and protected by attorney-client privilege.</span>
                            </div>
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-800">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:5084540822" className="text-gray-700 hover:text-blue-700 transition-colors">508-454-0822</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:Joe@summitlawoffices.com" className="text-gray-700 hover:text-blue-700 transition-colors">Joe@summitlawoffices.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-700">1042 Main Street, Suite C<br />Clinton, MA 01510</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM<br />Weekends: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Office Location Map */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Location</h2>
                <div className="border border-blue-300 rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://maps.google.com/maps?q=1042+Main+Street,+Clinton,+MA+01510&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-72" 
                    frameBorder="0" 
                    allowFullScreen
                    aria-hidden="false"
                    loading="lazy"
                    title="Summit Law Office Location"
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-gray-600 italic">Our office is marked with the yellow star</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
