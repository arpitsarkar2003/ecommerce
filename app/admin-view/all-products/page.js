import CommonListing from "@/app/component/CommonListing";
import { getAllAdminProducts } from "@/app/services/product";



export default async function AdminAllProduct() {

    const AllAdminProducts = await getAllAdminProducts();

    // console.log(AllAdminProducts);
    return (
        <>
            <CommonListing data={AllAdminProducts && AllAdminProducts.data}/>
        </>
       
    )
}