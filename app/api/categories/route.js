import { NextResponse } from "next/server";

export const GET = async (req) => {
  return new NextResponse(JSON.stringify({ message: "GET /api/categories" }), {
    status: 200,
  });
};
