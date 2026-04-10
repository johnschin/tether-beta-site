import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const role = String(formData.get("role") || "").trim();
  const message = String(formData.get("message") || "").trim();

  console.log("Beta signup received:", {
    name,
    email,
    company,
    role,
    message,
  });

  redirect("/beta/thanks");
}