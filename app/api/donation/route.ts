import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const amount = formData.get("amount");
    const address = formData.get("address");
    const screenshot = formData.get("screenshot") as File;

    const buffer = Buffer.from(await screenshot.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Donation Form" <${process.env.EMAIL_USER}>`,
      to: "aaryagaushala@gmail.com",
      subject: "New Donation",
      html: `
        <h2>Donation Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Amount:</b> ₹${amount}</p>
        <p><b>Address:</b> ${address}</p>
      `,
      attachments: [
        {
          filename: screenshot.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
