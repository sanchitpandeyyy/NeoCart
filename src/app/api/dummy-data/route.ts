import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const method = searchParams.get("method");
    const totalPrice = searchParams.get("totalPrice");

    const generateId = () => Math.random().toString(36).substr(2, 9);

    switch (method) {
        case "esewa":
            return NextResponse.json({
                amount: totalPrice,
                productName: "eSewa Test Product",
                transactionId: `ESEWA-${generateId()}`,
            });

        case "khalti":
            return NextResponse.json({
                amount: totalPrice,
                productName: "Khalti Test Product",
                transactionId: `KHALTI-${generateId()}`,
            });

        default:
            return NextResponse.json(
                { error: "Invalid payment method" },
                { status: 400 }
            );
    }
}