import connectToDB from "@/app/Database/Index";
import Product from "@/app/models/prouct";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectToDB();

        const user = 'admin';

        if (user === 'admin') {
            const extractAllProducts = await Product.find({});
            if(extractAllProducts) {
                return NextResponse.json({
                    success: true,
                    data: extractAllProducts,
                });
            } else {
                return NextResponse.json({
                    success: false,
                    message: "No products found",
                });
            }
        } else {
            return NextResponse.json({
                success: false,
                message: "You are not authorized to perform this action",
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "someting went wrong",
        });
    }
}