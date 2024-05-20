import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const denomination = url.searchParams.get("denomination");
  const search = url.searchParams.get("search");

  let query = supabase.from("products").select(`
    id,
    name,
    img,
    price,
    category (
      id,
      category,
      img,
      denominations
    ),
    denomination (
      id,
      denomination
    )
  `);

  if (search) {
    query = query.ilike("name", `%${search}%`);
  } else {
    if (category) {
      query = query.eq("category", category);
      if (denomination) {
        query = query.eq("denomination", denomination);
      }
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase query error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
