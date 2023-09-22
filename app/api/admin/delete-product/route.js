import connectToDB from "@/app/Database/Index";
import Product from "@/app/models/prouct";
// import { deleteAProduct } from "@/app/services/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Product id is required",
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Product deleted successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete the product ! Please try again",
        });
      }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}