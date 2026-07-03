import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { category: string } },
) {
  const { category } = await params;

  const endpoints: Record<string, string> = {
    chart: "https://api.deezer.com/chart",
  };

  const url = endpoints[category];

  if (!url) {
    return NextResponse.json({ error: "Invalid category" }, { status: 404 });
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
