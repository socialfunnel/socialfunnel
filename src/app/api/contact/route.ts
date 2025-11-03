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
    let thankYouData, adminData;
    const emailStatus = { thankYou: false, admin: false };

    try {
      const thankYouResult = await resend.emails.send({
        from: "Social Funnel <noreply@socialfunnel.agency>",
        to: [formData.email],
        subject: `Thank you for your inquiry, ${firstName}!`,
        react: ThankYouEmailTemplate({
          firstName,
          companyName: formData.companyName,
        }),
      });

      if (thankYouResult.error) {
        console.error("Error sending thank you email:", thankYouResult.error);

        // If domain not verified, continue but note the issue
        if (
          thankYouResult.error.message &&
          thankYouResult.error.message.includes("domain is not verified")
        ) {
          console.log(
            "Domain verification pending - continuing with form submission"
          );
        }
      } else {
        thankYouData = thankYouResult.data;
        emailStatus.thankYou = true;
      }
    } catch (thankYouError) {
      console.error("Thank you email failed:", thankYouError);
    }

    // Send admin notification email
    try {
      const adminResult = await resend.emails.send({
        from: "Contact Form <noreply@socialfunnel.agency>",
        to: ["info@socialfunnel.agency"],
        cc: ["socialfunnelke@gmail.com"],
        subject: `🚨 New Contact Form: ${formData.companyName} - ${formData.marketingNeeds}`,
        react: AdminNotificationEmailTemplate({
          formData,
          submittedAt,
        }),
      });

      if (adminResult.error) {
        console.error("Error sending admin notification:", adminResult.error);
      } else {
        adminData = adminResult.data;
        emailStatus.admin = true;
      }
    } catch (adminError) {
      console.error("Admin notification failed:", adminError);
    }

    // Return success regardless of email status since form was processed
    const message =
      emailStatus.thankYou && emailStatus.admin
        ? "Your inquiry has been submitted successfully! Check your email for confirmation."
        : emailStatus.thankYou
        ? "Your inquiry has been submitted successfully! Check your email for confirmation."
        : "Your inquiry has been submitted successfully! Our team will contact you within 24 hours.";

    return NextResponse.json({
      success: true,
      message,
      thankYouEmailId: thankYouData?.id,
      adminEmailId: adminData?.id,
      emailStatus,
    });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
