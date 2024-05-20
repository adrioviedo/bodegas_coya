import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const order = await request.json();

    if (!order || !order.cart || !order.total) {
      return new Response("Pedido no válido", {
        status: 400,
      });
    }

    // Extraer el user_id del token
    const token = cookies.get("sb-access-token")?.value;
    if (!token) {
      return new Response("No autorizado", {
        status: 401,
      });
    }

    const { data: user, error: userError } = await supabase.auth.getUser(token);

    if (userError) {
      return new Response("Error al autenticar el usuario", {
        status: 500,
      });
    }

    if (!user) {
      return new Response("Usuario no encontrado", {
        status: 404,
      });
    }

    // Insertar el pedido en la base de datos
    const { data, error: orderError } = await supabase.from("orders").insert([
      {
        user_id: user.user.id,
        date: new Date(),
        total: order.total,
        items: order.cart,
      },
    ]);

    if (orderError) {
      return new Response(
        `Error al registrar el pedido: ${orderError.message}`,
        {
          status: 500,
        }
      );
    }

    return new Response("Pedido registrado", {
      status: 201,
    });
  } catch (error) {
    return new Response("Error en el servidor", {
      status: 500,
    });
  }
};
