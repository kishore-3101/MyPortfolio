const express = require("express");
const cors = require("cors");
const dotenv= require("dotenv");
const {Resend}=require("resend");
const path = require("path");

dotenv.config();
const app=express();
const resend=new Resend(process.env.RESEND_API_KEY);

app.use(cors({
    origin: 'https://kishorekumarp.me'
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..")));

app.post("/api/contact", async (req, res) =>{
    try{
        const {name, email, whatsapp, phone, subject, message} = req.body;
        if(!name || !email || !whatsapp || !phone || !message){
            return res.status(400).json({
                success: false,
                message: "Required fields are missing..."
            });
        }

        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: `New Contact form filled from portfolio by ${name}`,
            html:`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="color-scheme" content="light dark">
                    <meta name="supported-color-schemes" content="light dark">
                    <style>
                        :root {
                            color-scheme: light dark;
                            supported-color-schemes: light dark;
                        }

                        @media (prefers-color-scheme: dark) {
                            .email-bg {
                                background-color: #080808 !important;
                            }
                            .card-bg {
                                background-color: #111111 !important;
                                border-color: #222222 !important;
                                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8) !important;
                            }
                            .text-primary {
                                color: #ffffff !important;
                            }
                            .text-secondary {
                                color: #a1a1aa !important;
                            }
                            .label-text {
                                color: #d4af37 !important;
                            }
                            .field-box {
                                background-color: #161616 !important;
                                border-color: #262626 !important;
                            }
                            .divider {
                                border-bottom-color: #1c1c1c !important;
                            }
                            .footer-bg {
                                background-color: #0b0b0b !important;
                                border-top-color: #1a1a1a !important;
                            }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0; word-spacing: normal;">
                    <div class="email-bg" style="font-family: 'Cinzel', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f5; padding: 50px 20px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="card-bg" style="max-width: 540px; margin: 0 auto; background-color: #ffffff; border-radius: 0px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.03);">
                            
                            <!-- Metallic Gold Top Accent Line -->
                            <tr>
                                <td style="background: linear-gradient(90deg, #b8860b 0%, #e6ca65 50%, #b8860b 100%); height: 2px; width: 100%;"></td>
                            </tr>

                            <!-- Header -->
                            <tr>
                                <td style="padding: 48px 44px 24px 44px; text-align: center;">
                                    <p style="color: #d4af37; margin: 0 0 10px 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px;">
                                        Inquiry Received
                                    </p>
                                    <h1 class="text-primary" style="color: #09090b; margin: 0; font-size: 21px; font-weight: 400; letter-spacing: 3px; text-transform: uppercase;">
                                        New Form Submission
                                    </h1>
                                </td>
                            </tr>

                            <!-- Divider -->
                            <tr>
                                <td style="padding: 0 44px;">
                                    <div class="divider" style="border-bottom: 1px solid #f4f4f5; margin: 6px 0 28px 0;"></div>
                                </td>
                            </tr>

                            <!-- Form Data Container -->
                            <tr>
                                <td style="padding: 0 44px 36px 44px;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                        
                                        <!-- Name -->
                                        <tr>
                                            <td style="padding-bottom: 14px;">
                                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box" style="background-color: #fafafa; border: 1px solid #f0e6d2; border-radius: 0px;">
                                                    <tr>
                                                        <td style="padding: 14px 18px;">
                                                            <p class="label-text" style="color: #b8860b; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 5px 0;">Name</p>
                                                            <p class="text-primary" style="color: #09090b; font-size: 14px; font-weight: 500; letter-spacing: 0.3px; margin: 0;">${name}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <!-- Email -->
                                        <tr>
                                            <td style="padding-bottom: 14px;">
                                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box" style="background-color: #fafafa; border: 1px solid #f0e6d2; border-radius: 0px;">
                                                    <tr>
                                                        <td style="padding: 14px 18px;">
                                                            <p class="label-text" style="color: #b8860b; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 5px 0;">Email</p>
                                                            <p class="text-primary" style="color: #09090b; font-size: 14px; font-weight: 500; letter-spacing: 0.3px; margin: 0;">${email}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <!-- WhatsApp & Contact Grid -->
                                        <tr>
                                            <td style="padding-bottom: 14px;">
                                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td width="48%" style="vertical-align: top;">
                                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box" style="background-color: #fafafa; border: 1px solid #f0e6d2; border-radius: 0px;">
                                                                <tr>
                                                                    <td style="padding: 14px 18px;">
                                                                        <p class="label-text" style="color: #b8860b; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 5px 0;">WhatsApp</p>
                                                                        <p class="text-primary" style="color: #09090b; font-size: 13px; font-weight: 500; margin: 0;">${whatsapp}</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td width="4%"></td>
                                                        <td width="48%" style="vertical-align: top;">
                                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box" style="background-color: #fafafa; border: 1px solid #f0e6d2; border-radius: 0px;">
                                                                <tr>
                                                                    <td style="padding: 14px 18px;">
                                                                        <p class="label-text" style="color: #b8860b; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 5px 0;">Contact</p>
                                                                        <p class="text-primary" style="color: #09090b; font-size: 13px; font-weight: 500; margin: 0;">${phone}</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <!-- Subject -->
                                        <tr>
                                            <td style="padding-bottom: 14px;">
                                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box" style="background-color: #fafafa; border: 1px solid #f0e6d2; border-radius: 0px;">
                                                    <tr>
                                                        <td style="padding: 14px 18px;">
                                                            <p class="label-text" style="color: #b8860b; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 5px 0;">Subject</p>
                                                            <p class="text-primary" style="color: #09090b; font-size: 14px; font-weight: 500; letter-spacing: 0.3px; margin: 0;">${subject}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <!-- Message -->
                                        <tr>
                                            <td>
                                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="field-box" style="background-color: #fafafa; border: 1px solid #f0e6d2; border-radius: 0px;">
                                                    <tr>
                                                        <td style="padding: 18px;">
                                                            <p class="label-text" style="color: #b8860b; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px 0;">Message</p>
                                                            <p class="text-secondary" style="color: #3f3f46; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                    </table>
                                </td>
                            </tr>z
                        </table>
                    </div>
                </body>
                </html>
            `
        });

        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: email,
            subject: `We recived your message`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="color-scheme" content="light dark">
                    <meta name="supported-color-schemes" content="light dark">
                    <style>
                        /* CSS Reset & Variables */
                        :root {
                            color-scheme: light dark;
                            supported-color-schemes: light dark;
                        }

                        /* Dark Mode Target Styles */
                        @media (prefers-color-scheme: dark) {
                            .email-bg {
                                background-color: #0d0d0d !important;
                            }
                            .card-bg {
                                background-color: #141414 !important;
                                border-color: #262626 !important;
                                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6) !important;
                            }
                            .text-primary {
                                color: #ffffff !important;
                            }
                            .text-secondary {
                                color: #a1a1aa !important;
                            }
                            .text-muted {
                                color: #71717a !important;
                            }
                            .text-footer-note {
                                color: #52525b !important;
                            }
                            .divider {
                                border-bottom-color: #222222 !important;
                            }
                            .quote-box {
                                background-color: #1a1a1a !important;
                                border-color: #2a2a2a !important;
                            }
                            .btn-primary {
                                background-color: #ffffff !important;
                                color: #000000 !important;
                            }
                            .btn-secondary {
                                background-color: transparent !important;
                                color: #ffffff !important;
                                border-color: #333333 !important;
                            }
                            .footer-bg {
                                background-color: #0f0f0f !important;
                                border-top-color: #1f1f1f !important;
                            }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0; word-spacing: normal;">
                    <div class="email-bg" style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 40px 20px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="card-bg" style="max-width: 540px; margin: 0 auto; background-color: #ffffff; border-radius: 0px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                            
                            <!-- Luxury Gold Accent Top Bar -->
                            <tr>
                                <td style="background: linear-gradient(90deg, #c5a059 0%, #e6ca65 50%, #c5a059 100%); height: 3px; width: 100%;"></td>
                            </tr>

                            <!-- Header -->
                            <tr>
                                <td style="padding: 40px 40px 20px 40px; text-align: center;">
                                    <h1 class="text-primary" style="color: #111827; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">
                                        Kishore Kumar
                                    </h1>
                                    <p style="color: #c5a059; margin: 8px 0 0 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2.5px;">
                                        Full Stack Developer
                                    </p>
                                </td>
                            </tr>

                            <!-- Divider -->
                            <tr>
                                <td style="padding: 0 40px;">
                                    <div class="divider" style="border-bottom: 1px solid #f3f4f6; margin: 10px 0 30px 0;"></div>
                                </td>
                            </tr>

                            <!-- Body Content -->
                            <tr>
                                <td style="padding: 0 40px 30px 40px;">
                                    <p class="text-primary" style="color: #111827; font-size: 16px; font-weight: 500; margin: 0 0 16px 0;">
                                        Hello ${name},
                                    </p>

                                    <p class="text-secondary" style="color: #4b5563; font-size: 14px; line-height: 1.7; margin: 0 0 16px 0;">
                                        Thank you for reaching out through my portfolio. I truly appreciate you taking the time to get in touch.
                                    </p>

                                    <p class="text-secondary" style="color: #4b5563; font-size: 14px; line-height: 1.7; margin: 0 0 32px 0;">
                                        I've received your message and will review it shortly. You can expect a reply from me within the next <span class="text-primary" style="color: #111827; font-weight: 600;">24 hours</span>.
                                    </p>

                                    <!-- Quote Box -->
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="quote-box" style="background-color: #faf8f5; border: 1px solid #f0e6d2; border-radius: 0px; margin: 0 0 36px 0;">
                                        <tr>
                                            <td style="padding: 16px 20px; text-align: center;">
                                                <p style="color: #c5a059; font-size: 13px; font-style: italic; margin: 0; letter-spacing: 0.3px;">
                                                    "Great things are built one conversation at a time."
                                                </p>
                                            </td>
                                        </tr>
                                    </table>

                                    <!-- Action Buttons -->
                                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                                        <tr>
                                            <td style="padding-right: 8px;" width="50%">
                                                <a href="https://kishorekumarp.me" class="btn-primary" style="display: block; background-color: #111827; color: #ffffff; text-decoration: none; padding: 12px 0; border-radius: 0px; font-size: 12px; font-weight: 600; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
                                                    Portfolio
                                                </a>
                                            </td>
                                            <td style="padding-left: 8px;" width="50%">
                                                <a href="https://www.linkedin.com/in/kishore-kumar-b9a32a290/" class="btn-secondary" style="display: block; background-color: transparent; color: #111827; text-decoration: none; padding: 11px 0; border-radius: 0px; font-size: 12px; font-weight: 600; text-align: center; text-transform: uppercase; letter-spacing: 1px; border: 1px solid #d1d5db;">
                                                    LinkedIn
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td class="footer-bg" style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #f3f4f6; text-align: center;">
                                    <p class="text-muted" style="color: #6b7280; font-size: 12px; margin: 0 0 4px 0;">
                                        Best regards,
                                    </p>
                                    <p class="text-primary" style="color: #111827; font-size: 13px; font-weight: 600; margin: 0 0 12px 0;">
                                        Kishore Kumar
                                    </p>
                                    <p class="text-footer-note" style="color: #9ca3af; font-size: 11px; margin: 0;">
                                        This is an automated confirmation - Do not reply to this email
                                    </p>
                                </td>
                            </tr>

                        </table>
                    </div>
                </body>
                </html>
            `
        });

        res.json({
            success: true,
            message: "Message sent successfully..."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
});

const PORT=process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running in the port ${PORT}`);
});