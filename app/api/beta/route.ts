import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_TETHER_API_KEY;
    const betaToEmail = process.env.BETA_TO_EMAIL || "info@tetheredconsulting.com";
    console.log("Using Resend key prefix:", apiKey?.slice(0, 6));
console.log("Sending to:", betaToEmail);
    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let company = "";
    let role = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = String(body?.name ?? "").trim();
      email = String(body?.email ?? "").trim().toLowerCase();
      company = String(body?.company ?? "").trim();
      role = String(body?.role ?? "").trim();
      message = String(body?.message ?? "").trim();
    } else {
      const formData = await request.formData();
      name = String(formData.get("name") ?? "").trim();
      email = String(formData.get("email") ?? "").trim().toLowerCase();
      company = String(formData.get("company") ?? "").trim();
      role = String(formData.get("role") ?? "").trim();
      message = String(formData.get("message") ?? "").trim();
    }

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

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
     from: "Tether Beta <info@tetheredconsulting.com>",
    to: [betaToEmail],
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
        {
          error: "Failed to send beta request email.",
          details: error,
        },
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
      {
        error: "Server error processing beta form.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}