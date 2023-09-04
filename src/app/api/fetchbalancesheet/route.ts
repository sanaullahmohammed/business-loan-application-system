import { generateBalanceSheet } from "@/app/lib/generateBalanceSheet";
import { NextResponse, NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const companyName = request.nextUrl.searchParams.get("companyname");
  const yearOfEstd = request.nextUrl.searchParams.get("yearofestd");
  console.log(companyName, yearOfEstd);
  if (yearOfEstd !== null) {
    const rv = generateBalanceSheet(parseInt(yearOfEstd));
    return NextResponse.json({ balanceSheet: rv });
  } else {
    return NextResponse.json({ balanceSheet: [] });
  }
}
