import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Social Funnel",
  description:
    "Get in touch with Social Funnel. Book a free consultation and discover how we can build a predictable client acquisition system for your high-ticket business.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Ready to build a predictable client acquisition system? Get in touch
            with us today.
          </p>

          <div className="mt-12 p-8 bg-muted/30 rounded-2xl border max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Get Started Today
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us using the information below or book a consultation
              directly through Calendly.
            </p>

            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+254 721 634 183</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  info@socialfunnel.agency
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  P. O. Box 1215 - 10400
                  <br />
                  Cape Chestnut, Nanyuki
                  <br />
                  Kenya
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Website</h3>
                <p className="text-muted-foreground">www.socialfunnel.agency</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-xl">
              <p className="text-sm text-center">
                <strong>Prefer to book directly?</strong>
                <br />
                <a
                  href="https://calendly.com/musemind/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Schedule your free 30-minute consultation on Calendly
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
