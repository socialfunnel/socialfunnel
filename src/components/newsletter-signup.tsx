"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Mail } from "lucide-react";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact";
  className?: string;
}

export function NewsletterSignup({
  title = "Stay Updated",
  description = "Get the latest insights on marketing strategies and business growth.",
  variant = "default",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Successfully subscribed!",
        });
        setEmail(""); // Reset form
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "compact") {
    return (
      <div className={`space-y-4 ${className}`}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1"
              required
              disabled={isSubmitting}
            />
            <Button type="submit" disabled={isSubmitting} className="group">
              {isSubmitting ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>

          {submitStatus.type && (
            <div
              className={`text-sm p-3 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
          <Mail className="h-4 w-4" />
          Newsletter
        </div>
        <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="h-12"
            required
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="group"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </div>

        {submitStatus.type && (
          <div
            className={`text-sm p-4 rounded-lg max-w-md mx-auto ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {submitStatus.type === "success" ? (
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
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
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
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
              <span className="font-medium">{submitStatus.message}</span>
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center max-w-md mx-auto">
          By subscribing, you agree to receive marketing emails. You can
          unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
