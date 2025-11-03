import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use default 'general' audience
const DEFAULT_AUDIENCE_ID = "general";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Try to remove contact from audience
    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID || DEFAULT_AUDIENCE_ID;
      await resend.contacts.remove({
        email,
        audienceId: audienceId,
      });
    } catch (removeError) {
      // Log error but continue - contact might not exist
      console.log("Contact removal info:", removeError);
    }

    // Return confirmation page
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unsubscribed - Social Funnel</title>
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
          .success-icon {
            font-size: 64px;
            margin-bottom: 20px;
          }
          h1 {
            color: #4F8EDB;
            font-size: 28px;
            margin-bottom: 20px;
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
          .btn:hover {
            background-color: #3d7bc7;
          }
          .btn-secondary {
            background-color: #D65A31;
          }
          .btn-secondary:hover {
            background-color: #b8481f;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success-icon">✅</div>
          <h1>Successfully Unsubscribed</h1>
          <p>You have been successfully unsubscribed from the Social Funnel newsletter.</p>
          <p><strong>Email:</strong> ${email}</p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #E8F2FC; border-radius: 8px; border-left: 4px solid #4F8EDB;">
            <h3 style="margin-top: 0; color: #4F8EDB;">We're sorry to see you go!</h3>
            <p style="margin-bottom: 0;">If you change your mind, you can always resubscribe by visiting our website or contacting us directly.</p>
          </div>
          
          <div>
            <a href="https://socialfunnel.agency" class="btn">
              🏠 Visit Our Website
            </a>
            <a href="mailto:info@socialfunnel.agency?subject=Resubscribe Request&body=Hi, I'd like to resubscribe ${encodeURIComponent(
              email
            )} to the newsletter." class="btn btn-secondary">
              📧 Contact Us
            </a>
          </div>
          
          <p style="font-size: 14px; color: #6c757d; margin-top: 40px;">
            <strong>Social Funnel Agency</strong><br/>
            Cape Chestnut, Nanyuki | P.O. Box 1215 - 10400, Kenya<br/>
            📧 info@socialfunnel.agency | 📞 +254 721 634 183
          </p>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("Newsletter unsubscribe API error:", error);

    // Return error page
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unsubscribe Error - Social Funnel</title>
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
          .error-icon {
            font-size: 64px;
            margin-bottom: 20px;
          }
          h1 {
            color: #D65A31;
            font-size: 28px;
            margin-bottom: 20px;
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
          <div class="error-icon">❌</div>
          <h1>Unsubscribe Error</h1>
          <p>We encountered an error while processing your unsubscribe request.</p>
          <p>Please contact us directly and we'll help you immediately:</p>
          <a href="mailto:info@socialfunnel.agency?subject=Unsubscribe Request&body=Hi, please unsubscribe me from the newsletter. Email: ${
            email || ""
          }" class="btn">
            📧 Contact Support
          </a>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
      status: 500,
    });
  }
}
