export const runtime = "edge";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (text(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = text(body.name, 120);
  const email = text(body.email, 200);
  const organization = text(body.organization, 160);
  const topic = text(body.topic, 160);
  const message = text(body.message, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Contact email is not configured." }, { status: 503 });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || "rami@ergonaute.net";
  const sender = process.env.CONTACT_FROM_EMAIL || "Ergonaute Website <website@ergonaute.net>";
  const subjectTopic = topic || "General inquiry";
  const emailText = [
    "New inquiry from the Ergonaute website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "Not provided"}`,
    `Topic: ${subjectTopic}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Ergonaute website inquiry: ${subjectTopic}`,
      text: emailText,
    }),
  });

  if (!result.ok) {
    return Response.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
