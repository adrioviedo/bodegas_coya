import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies }) => {
  const order = await request.json();

  if (!order) {
    return new Response("Pedido no recibido", {
      status: 400,
    });
  }

  // sacar el user_id del token
  const token = cookies.get("sb-access-token")?.value;
  if (!token) {
    return new Response("No autorizado", {
      status: 401,
    });
  }
  const { data: user, error } = await supabase.auth.getUser(token);

  if (error) {
    return new Response("User Fail", {
      status: 500,
    });
  }

  if (!user) {
    return new Response("Usuario no encontrado", {
      status: 404,
    });
  }

  const { data, error: orderError } = await supabase.from("orders").insert([
    {
      user_id: user.user.id,
      date: new Date(),
      order,
    },
  ]);

  if (orderError) {
    return new Response("Order Fail", {
      status: 500,
    });
  }

  if (!data) {
    return new Response("Error al registrar el pedido", {
      status: 500,
    });
  }

  return new Response("Pedido registrado", {
    status: 201,
  });
};
