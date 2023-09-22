import connectToDB from "@/app/Database/Index";
import Product from "@/app/models/prouct";
import Joi from "joi";
import { NextResponse } from "next/server";


const AddProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    sizes: Joi.array().required(),
    deliveryInfo: Joi.string().required(),
    onSale: Joi.string().required(),
    priceDrop: Joi.number().required(),
    imageUrl: Joi.string().required(),
})


export const dynamic = "force-dynamic";



export async function POST(req) {
    try {
        await connectToDB();

        const user = 'admin';

        if(user === 'admin'){
            const extractdata = await req.json();
            const { name, description, price, category, sizes, deliveryInfo, onSale, priceDrop, imageUrl } = extractdata;

            const { error } = AddProductSchema.validate({ name, description, price, category, sizes, deliveryInfo, onSale, priceDrop, imageUrl });

            if(error) {
                return NextResponse.json({
                    success: false,
                    message: error.details[0].message,
                });
            }

            const newlyCreatedProduct = await Product.create(extractdata);

            if(newlyCreatedProduct) {
                return NextResponse.json({
                    success: true,
                    message: "Product created successfully",
                });
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Failed to add product ! Please try again later",
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
            message: "Something went wrong ! Please try again later",
          });
    }
}