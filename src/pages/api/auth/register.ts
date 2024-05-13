import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const phone = formData.get("phone")?.toString();
  const address = formData.get("address")?.toString();

  if (!email || !password) {
    return new Response("Correo electrónico y contraseña obligatorios", {
      status: 400,
    });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        last_name: lastName,
        full_name: `${name} ${lastName}`,
        phone,
        address,
      },
    },
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  if (!data) {
    return new Response("Error al registrar el usuario", { status: 500 });
  }

  if (data.session) {
    const { access_token, refresh_token } = data.session;
    cookies.set("sb-access-token", access_token, {
      path: "/",
    });
    cookies.set("sb-refresh-token", refresh_token, {
      path: "/",
    });
  }
  return redirect("/dashboard");
};
