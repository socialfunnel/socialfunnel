import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use default 'general' audience
const DEFAULT_AUDIENCE_ID = "general";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Get contact information
    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID || DEFAULT_AUDIENCE_ID;
      const contact = await resend.contacts.get({
        email,
        audienceId: audienceId,
      });

      // Return a simple HTML page for managing preferences
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Newsletter Preferences - Social Funnel</title>
          <style>
            body {
              font-family: 'Lexend', Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #f8f9fa;
              color: #000000;
            }
            .container {
              background: white;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              height: 60px;
              margin-bottom: 20px;
            }
            h1 {
              color: #4F8EDB;
              font-size: 28px;
              margin-bottom: 10px;
            }
            .btn {
              display: inline-block;
              padding: 12px 24px;
              background-color: #D65A31;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              margin: 10px;
            }
            .btn:hover {
              background-color: #b8481f;
            }
            .btn-primary {
              background-color: #4F8EDB;
            }
            .btn-primary:hover {
              background-color: #3d7bc7;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="/assets/images/logos/logo.png" alt="Social Funnel Logo" class="logo" />
              <h1>Newsletter Preferences</h1>
              <p>Manage your Social Funnel newsletter subscription</p>
            </div>
            
            <div style="text-align: center;">
              <h3>Email: ${email}</h3>
              <p>Choose how you'd like to receive updates from us:</p>
              
              <div style="margin: 30px 0;">
                <a href="/api/newsletter/unsubscribe?email=${encodeURIComponent(
                  email
                )}" class="btn">
                  🚫 Unsubscribe from All Emails
                </a>
                <br/>
                <a href="mailto:info@socialfunnel.agency?subject=Newsletter Preferences&body=Hi, I'd like to update my newsletter preferences for ${encodeURIComponent(
                  email
                )}" class="btn btn-primary">
                  ✉️ Contact Us About Preferences
                </a>
              </div>
              
              <p style="font-size: 14px; color: #6c757d; margin-top: 40px;">
                If you have any questions, please contact us at 
                <a href="mailto:info@socialfunnel.agency">info@socialfunnel.agency</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

      return new NextResponse(html, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (contactError) {
      console.error("Error fetching contact:", contactError);

      // Return preferences page even if contact not found
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Newsletter Preferences - Social Funnel</title>
          <style>
            body {
              font-family: 'Lexend', Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #f8f9fa;
              color: #000000;
            }
            .container {
              background: white;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              text-align: center;
            }
            .btn {
              display: inline-block;
              padding: 12px 24px;
              background-color: #4F8EDB;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              margin: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 style="color: #4F8EDB;">Newsletter Preferences</h1>
            <p>We couldn't find a subscription for <strong>${email}</strong></p>
            <p>If you believe this is an error, please contact us:</p>
            <a href="mailto:info@socialfunnel.agency?subject=Newsletter Issue&body=Hi, I'm having trouble with newsletter preferences for ${encodeURIComponent(
              email
            )}" class="btn">
              Contact Support
            </a>
          </div>
        </body>
        </html>
      `;

      return new NextResponse(html, {
        headers: { "Content-Type": "text/html" },
      });
    }
  } catch (error) {
    console.error("Newsletter preferences API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
