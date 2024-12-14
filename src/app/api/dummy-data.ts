import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const method = searchParams.get("method");

    if (method === "esewa") {
        return NextResponse.json({
            amount: "100.00",
            productName: "Test Product",
            transactionId: "123456789",
        });
    } else if (method === "khalti") {
        return NextResponse.json({
            amount: "150.00",
            productName: "Another Test Product",
            transactionId: "987654321",
        });
    } else {
        return NextResponse.json(
            { error: "Invalid payment method" },
            { status: 400 }
        );
    }
}