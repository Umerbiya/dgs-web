import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, inquiryType, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required fields." },
                { status: 400 }
            );
        }

        // Configure standard Nodemailer transporter for cPanel SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports (587)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            // Explicitly set tls ciphers for cPanel compatibility
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false
            }
        });

        // Email layout
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Send *from* the authenticated email to avoid DMARC/spam issues
            replyTo: email, // Set reply-to as the customer's email so replying goes to them
            to: "info@dangts.et",
            subject: `New Website Inquiry: ${inquiryType || 'General'} - from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Inquiry Type: ${inquiryType || 'Not provided'}

Message:
${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-w-xl mx-auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h2 style="color: #4065a9;">New Website Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not provided'}</p>
                    <br/>
                    <h3 style="color: #4b5563;">Message:</h3>
                    <p style="background: #f8fafc; padding: 15px; border-left: 4px solid #4065a9; border-radius: 4px; white-space: pre-wrap;">${message}</p>
                </div>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Email sent successfully!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("SMTP Error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
