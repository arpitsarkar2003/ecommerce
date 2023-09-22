import connectToDB from "@/app/Database/Index";
import Product from "@/app/models/prouct";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";


export async function PUT(req){
    try {
        await connectToDB();
        const extractdata = await req.json();

        const { _id, name, description, price, category, sizes, deliveryInfo, onSale, priceDrop, imageUrl } = extractdata;

        const updateProduct = await Product.findByIdAndUpdate(_id, { name, description, price, category, sizes, deliveryInfo, onSale, priceDrop, imageUrl }, { new: true });


        if(updateProduct) {
            return NextResponse.json({
                success: true,
                message: "Product updated successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to update product ! Please try again later",
            });
        }


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again later",
          });
    }
}