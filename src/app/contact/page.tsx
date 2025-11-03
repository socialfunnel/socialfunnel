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

const marketingServices = [
  "Lead Generation",
  "Marketing Automation",
  "Call Center Setup",
  "CRM Integration",
  "Brand & Funnel Design",
  "Paid Advertising (Facebook/Google)",
  "Analytics & Reporting",
  "Full Business Development Package",
  "Website Development & Optimization",
  "Social Media Marketing",
  "Content Marketing & SEO",
  "Other",
];

const sectors = [
  "Healthcare",
  "Real Estate & Construction",
  "Technology & Software",
  "Financial Services",
  "Education",
  "E-commerce & Retail",
  "Professional Services",
  "Manufacturing",
  "NGO & Non-Profit",
  "Hospitality & Tourism",
  "Other",
];

const hearAboutUs = [
  "Google Search",
  "Social Media (Facebook, Instagram, LinkedIn)",
  "Referral from a friend/colleague",
  "Industry event/conference",
  "Online advertisement",
  "Business directory",
  "Previous client recommendation",
  "Other",
];

const budgetRanges = [
  "$1,000 - $5,000",
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
    companyWebsite: "",
    sector: "",
    marketingNeeds: "",
    otherMarketingNeeds: "",
    hearAboutUs: "",
    projectBudget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Thank you! We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          companyWebsite: "",
          sector: "",
          marketingNeeds: "",
          otherMarketingNeeds: "",
          hearAboutUs: "",
          projectBudget: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

                  {/* Company Website & Sector */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="companyWebsite"
                        className="text-sm font-semibold"
                      >
                        Company Website (Optional)
                      </Label>
                      <Input
                        id="companyWebsite"
                        name="companyWebsite"
                        type="url"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        placeholder="https://www.yourcompany.com"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-sm font-semibold">
                        Sector/Industry *
                      </Label>
                      <select
                        id="sector"
                        name="sector"
                        required
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select your sector/industry</option>
                        {sectors.map((sector, index) => (
                          <option key={index} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* How They Heard About Us & Project Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="hearAboutUs"
                        className="text-sm font-semibold"
                      >
                        How did you hear about us? *
                      </Label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        required
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select how you found us</option>
                        {hearAboutUs.map((source, index) => (
                          <option key={index} value={source}>
                            {source}
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

                  {/* Marketing Needs - Moved to bottom */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="marketingNeeds"
                        className="text-sm font-semibold flex items-center gap-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Marketing Needs / Services you&apos;re interested in *
                      </Label>
                      <select
                        id="marketingNeeds"
                        name="marketingNeeds"
                        required
                        value={formData.marketingNeeds}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">
                          Select services you&apos;re interested in
                        </option>
                        {marketingServices.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Conditional text field for "Other" option */}
                    {formData.marketingNeeds === "Other" && (
                      <div className="space-y-2">
                        <Label
                          htmlFor="otherMarketingNeeds"
                          className="text-sm font-semibold"
                        >
                          Please specify your marketing needs:
                        </Label>
                        <textarea
                          id="otherMarketingNeeds"
                          name="otherMarketingNeeds"
                          required={formData.marketingNeeds === "Other"}
                          value={formData.otherMarketingNeeds}
                          onChange={handleInputChange}
                          placeholder="Describe your specific marketing needs and goals..."
                          rows={4}
                          className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg border ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border-green-200 text-green-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {submitStatus.type === "success" ? (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        <p className="text-sm font-medium">
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Inquiry
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
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

              {/* Social Media */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-bold mb-6">Follow Us</h3>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect with us on social media for updates, insights, and
                    success stories.
                  </p>

                  <div className="space-y-3 max-w-xs">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/profile.php?id=61556134019172"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-4 py-3 bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">@socialfunnel</p>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/socialfunnel_ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-4 py-3 bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                        <svg
                          className="w-4 h-4 text-pink-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">@socialfunnel_ke</p>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/social-funnel-ke/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-4 py-3 bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-blue-700/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700/20 transition-colors">
                        <svg
                          className="w-4 h-4 text-blue-700"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Social Funnel Kenya</p>
                    </a>
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
