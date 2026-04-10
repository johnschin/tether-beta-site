import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name = "",
      email = "",
      company = "",
      role = "",
      message = "",
    } = body ?? {};

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Tether Beta <Info@TetheredConsulting.com>",
      to: ["Info@TetheredConsulting.com"],
      replyTo: email,
      subject: `New Tether beta signup from ${name}`,
      text: `
New beta submission

Name: ${name}
Email: ${email}
Company: ${company}
Role: ${role}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true, data });
  } catch (error) {
    console.error("Beta route error:", error);
    return Response.json(
      { error: "Server error processing beta form." },
      { status: 500 }
    );
  }
}