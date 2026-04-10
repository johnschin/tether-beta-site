import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const role = String(body?.role ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Tether Beta <Info@TetheredConsulting.com>",
      to: ["Info@TetheredConsulting.com"],
      replyTo: email,
      subject: `New Tether beta signup from ${name}`,
      text: [
        "New Tether beta submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Role: ${role || "Not provided"}`,
        "",
        "Message:",
        message || "Not provided",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send beta request email." },
        { status: 500 }
      );
    }

    return Response.json(
      {
        ok: true,
        message: "Beta request submitted successfully.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Beta route error:", error);
    return Response.json(
      { error: "Server error processing beta form." },
      { status: 500 }
    );
  }
}