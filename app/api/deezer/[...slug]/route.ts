import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;

  const path = slug.join("/");
  const apiUrl = `https://api.deezer.com/${path}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch from Deezer" },
      { status: 500 },
    );
  }
}
