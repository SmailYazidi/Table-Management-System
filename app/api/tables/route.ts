// app/api/tables/route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Table from "@/lib/models/Table";
import Reservation from "@/lib/models/Reservation"; // This import is not strictly needed for this route's current logic, but doesn't hurt.

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const tables = await Table.find();
    return NextResponse.json(tables, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch tables" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const table = await Table.create(body);
    return NextResponse.json(table, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create table" }, { status: 500 });
  }
}
