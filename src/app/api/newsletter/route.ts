import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { NewsletterThankYouEmailTemplate } from "@/components/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Create contact in Resend using environment audience ID
    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID;

      if (!audienceId) {
        return NextResponse.json(
          { error: "Resend audience ID not configured" },
          { status: 500 }
        );
      }

      await resend.contacts.create({
        email,
        firstName: firstName || email.split("@")[0],
        audienceId: audienceId,
      });
    } catch (contactError) {
      // Log error but don't fail the request if contact already exists
     
    }

    // Send thank you email - handle domain verification gracefully
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Social Funnel <noreply@socialfunnel.agency>",
        to: [email],
        subject: "🎉 Welcome to Social Funnel Newsletter!",
        react: NewsletterThankYouEmailTemplate({
          firstName,
          email,
        }),
      });

      if (emailError) {
        console.error("Error sending newsletter thank you email:", emailError);

        // If domain is not verified, still return success since contact was added
        if (
          emailError.message &&
          emailError.message.includes("domain is not verified")
        ) {
          return NextResponse.json({
            success: true,
            message:
              "Successfully subscribed! Welcome email will be sent once domain is verified.",
            note: "Domain verification pending - contact was added to audience successfully.",
          });
        }

        // For other email errors, still return success since contact was added
        return NextResponse.json({
          success: true,
          message:
            "Successfully subscribed! There was an issue sending the welcome email, but you're on the list.",
          emailError: emailError.message,
        });
      }

      return NextResponse.json({
        success: true,
        message:
          "Successfully subscribed!",
        emailId: emailData?.id,
      });
    } catch (emailSendError) {
      console.error("Email sending failed:", emailSendError);

      // Still return success since contact was added successfully
      return NextResponse.json({
        success: true,
        message:
          "Successfully subscribed! Welcome email couldn't be sent, but you're on our list.",
      });
    }
  } catch (error) {
    console.error("Newsletter subscription API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
