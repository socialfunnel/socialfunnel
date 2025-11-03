import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { NewsletterThankYouEmailTemplate } from "@/components/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use default 'general' audience
const DEFAULT_AUDIENCE_ID = "general";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    // Create contact in Resend using default audience
    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID || DEFAULT_AUDIENCE_ID;

      await resend.contacts.create({
        email,
        firstName: firstName || email.split("@")[0],
        audienceId: audienceId,
      });

      console.log(`Contact ${email} added to audience ${audienceId}`);
    } catch (contactError) {
      // Log error but don't fail the request if contact already exists
      console.log("Contact creation info:", contactError);
    }

    // Send thank you email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Social Funnel <noreply@mail.socialfunnel.agency>",
      to: [email],
      subject: "🎉 Welcome to Social Funnel Newsletter!",
      react: NewsletterThankYouEmailTemplate({
        firstName,
        email,
      }),
    });

    if (emailError) {
      console.error("Error sending newsletter thank you email:", emailError);
      return NextResponse.json(
        { error: "Failed to send welcome email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Successfully subscribed! Check your email for a welcome message.",
      emailId: emailData?.id,
    });
  } catch (error) {
    console.error("Newsletter subscription API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
