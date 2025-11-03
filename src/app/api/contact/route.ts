import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ThankYouEmailTemplate,
  AdminNotificationEmailTemplate,
} from "@/components/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "companyName",
      "email",
      "sector",
      "marketingNeeds",
      "hearAboutUs",
      "projectBudget",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Extract first name from full name
    const firstName = formData.fullName.split(" ")[0];
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Nairobi",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    // Send thank you email to the user
    const { data: thankYouData, error: thankYouError } =
      await resend.emails.send({
        from: "Social Funnel <noreply@mail.socialfunnel.agency>",
        to: [formData.email],
        subject: `Thank you for your inquiry, ${firstName}!`,
        react: ThankYouEmailTemplate({
          firstName,
          companyName: formData.companyName,
        }),
      });

    if (thankYouError) {
      console.error("Error sending thank you email:", thankYouError);
      return NextResponse.json(
        { error: "Failed to send thank you email" },
        { status: 500 }
      );
    }

    // Send admin notification email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "Contact Form <noreply@mail.socialfunnel.agency>",
      to: ["info@socialfunnel.agency"], // Add more admin emails if needed
      subject: `🚨 New Contact Form: ${formData.companyName} - ${formData.marketingNeeds}`,
      react: AdminNotificationEmailTemplate({
        formData,
        submittedAt,
      }),
    });

    if (adminError) {
      console.error("Error sending admin notification:", adminError);
      // Still return success since the thank you email was sent
      // But log the error for monitoring
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
      thankYouEmailId: thankYouData?.id,
      adminEmailId: adminData?.id,
    });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
