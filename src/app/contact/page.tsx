"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Building,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { motion } from "motion/react";

const transitionVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
};

const services = [
  "Lead Generation",
  "Marketing Automation",
  "Call Center Setup",
  "CRM Integration",
  "Brand & Funnel Design",
  "Paid Advertising (Facebook/Google)",
  "Analytics & Reporting",
  "Full Business Development Package",
];

const budgetRanges = [
  "$1,000 - $,5000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    serviceRequired: "",
    projectBudget: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with your backend API or email service
  };

  return (
    <main className="overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Get In Touch
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="font-serif mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Ready to Transform Your Business?
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.3}
                as="p"
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Let&apos;s discuss how Social Funnel can build a predictable
                client acquisition system for your high-ticket business. Fill
                out the form below and we&apos;ll get back to you within 24
                hours.
              </TextEffect>
            </motion.div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-serif font-bold mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-muted-foreground">
                    Tell us about your business and project requirements.
                    We&apos;ll create a custom strategy that fits your goals and
                    budget.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>

                  {/* Company Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="companyName"
                        className="text-sm font-semibold flex items-center gap-2"
                      >
                        <Building className="h-4 w-4" />
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Service Required & Project Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="serviceRequired"
                        className="text-sm font-semibold"
                      >
                        Service Required *
                      </Label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        required
                        value={formData.serviceRequired}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="projectBudget"
                        className="text-sm font-semibold"
                      >
                        Project Budget *
                      </Label>
                      <select
                        id="projectBudget"
                        name="projectBudget"
                        required
                        value={formData.projectBudget}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="projectDetails"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Project Details *
                    </Label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us about your business, current challenges, and what you hope to achieve with our services..."
                      rows={5}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full group">
                    <Send className="mr-2 h-4 w-4" />
                    Send Inquiry
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>

                {/* Alternative CTA */}
                <div className="mt-8 pt-8 border-t border-border/50 text-center">
                  <p className="text-muted-foreground mb-4">
                    Not interested to submit the form?
                  </p>
                  <Button asChild size="lg" className="group">
                    <Link
                      href="https://calendly.com/musemind/30min"
                      target="_blank"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book A Call Directly
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-bold mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">
                        +254 721 634 183
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">
                        info@socialfunnel.agency
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm">
                        Cape Chestnut, Nanyuki
                        <br />
                        P.O. Box 1215 - 10400
                        <br />
                        Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM EAT
                        <br />
                        Saturday: 10:00 AM - 4:00 PM EAT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6">
                <h3 className="text-lg font-serif font-bold mb-3">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-muted-foreground">
                      Email: Within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-muted-foreground">
                      Phone: Immediate
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
