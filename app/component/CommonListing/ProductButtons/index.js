'use client';

import { GlobalContext } from '@/app/context/Index';
import { deleteAProduct } from '@/app/services/product';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';

function ProductButton({ item }) {

    const { setCurrentUpdateProduct, setComponentLevelLoader, ComponentLevelLoader } = useContext(GlobalContext);

    const router = useRouter();

    const pathName = usePathname();
    const isAdminView = pathName.includes('admin-view');

    async function handleDeleteProduct(item) {
        setComponentLevelLoader({ loading: true, id: item._id });
    
        const res = await deleteAProduct(item._id);
    
        if (res.success) {
          setComponentLevelLoader({ loading: false, id: "" });
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          router.refresh();
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setComponentLevelLoader({ loading: false, id: "" });
        }
 
      }
    


    return isAdminView ?
        <>
            <button className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                onClick={() => {
                    setCurrentUpdateProduct(item)
                    router.push("/admin-view/add-product")
                }}>Update</button>
            <button
                onClick={() => {
                    handleDeleteProduct(item)
                }}
                className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">

                {
                    ComponentLevelLoader && ComponentLevelLoader.loading && ComponentLevelLoader.id === item._id ? <ComponentLevelLoader
                        text={"Delete Product"}
                        color={"#ffffff"}
                        loading={componentLevelLoader && componentLevelLoader.loading}
                    /> : ("DELETE")
                }
            </button>
        </> :
        <>
            <button className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Add To Cart</button>
        </>
}

export default ProductButton