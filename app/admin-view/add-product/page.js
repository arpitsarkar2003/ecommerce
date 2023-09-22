'use client';

import ComponentLevelLoader from "@/app/component/Loader/componentLevel/Index";
import Notification from "@/app/component/Notification/Index";
import InputComponent from "@/app/component/formElements/InputComponent/Index";
import SelectComponent from "@/app/component/formElements/SelectComponent/Index";
import TileComponent from "@/app/component/formElements/TileComponent";
import { GlobalContext } from "@/app/context/Index";
import { addNewProduct, updateAProduct } from "@/app/services/product";
import { AvailableSizes, adminAddProductformControls, firebaseConfig, firebaseStorageURL } from "@/app/utils";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";










const app = initializeApp(firebaseConfig);


const storage = getStorage(app, firebaseStorageURL)

const createUniqueFileName = (getTime) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(7);
    return `${timeStamp}-${randomStringValue}-${getTime}`
}


async function helperForUploadingImagetoFirebase(file) {
    const getFilename = createUniqueFileName();

    const storageRef = ref(storage, `ecommerce/${getFilename}`);

    const uploadImage = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadImage.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
        }, (error) => {
            console.log(error);
        }, () => {
            getDownloadURL(uploadImage.snapshot.ref).then((url) => resolve(url)).catch((error) => reject(error));
        })
    })
}

const initialFormData = {
    name: "",
    description: "",
    price: "",
    category: "",
    sizes: [],
    deliveryInfo: "",
    onSale: "",
    priceDrop: "",
    imageUrl: "",
}

export default function AdminAddNewProduct() {

    const [formData, setFormData] = useState({ ...initialFormData });

    const { componentLevelLoader,
        setComponentLevelLoader, CurrentUpdateProduct, setCurrentUpdateProduct } = useContext(GlobalContext);

    // console.log(CurrentUpdateProduct);

    const router = useRouter();

    async function handleImage(e) {

        const extractImageURL = await helperForUploadingImagetoFirebase(e.target.files[0]);

        if (extractImageURL) {
            setFormData({
                ...formData,
                imageUrl: extractImageURL,
            });
        }
    }


    useEffect(() => {
        if (CurrentUpdateProduct !== null) setFormData(CurrentUpdateProduct)
    }, [CurrentUpdateProduct])


    function handleTileClick(getCurrentItem) {
        let cpySizes = [...formData.sizes];
        const index = cpySizes.findIndex((item) => item.id === getCurrentItem.id);

        if (index === -1) {
            cpySizes.push(getCurrentItem);
        } else {
            cpySizes = cpySizes.filter((item) => item.id !== getCurrentItem.id);
        }

        setFormData({
            ...formData,
            sizes: cpySizes,
        });
    }

    async function handleAddProduct() {
        const res = CurrentUpdateProduct !== null ? await updateAProduct(formData) : await addNewProduct(formData);
        console.log(res);
        
        setComponentLevelLoader({ loading: true, id: "" });

        if (res.success) {
            setComponentLevelLoader({ loading: false, id: "" });
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            setFormData(initialFormData);
            setTimeout(() => {
                router.push("/admin-view/all-products");
            })
        } else {
            setComponentLevelLoader({ loading: false, id: "" });
            toast.error("Fill in all required fields first", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }








    return (
        <div className="w-full mt-5 mr-0 mb-0 ml-0 relative">
            <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
                <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
                    <input
                        accept="image/*"
                        max="1000000"
                        type="file"
                        onChange={handleImage}
                    />

                    <div className="flex gap-5 flex-col">
                        <label>Available sizes</label>
                        <TileComponent
                            selected={formData.sizes}
                            onClick={handleTileClick}
                            data={AvailableSizes.map((size) => ({
                                ...size,
                                key: size.id, // Provide a unique key for each size
                            }))}
                        />
                        {adminAddProductformControls.map((controlItem, index) => (
                            controlItem.componentType === "input" ? (
                                <InputComponent
                                    key={index} // Provide a unique key (e.g., using the index)
                                    type={controlItem.type}
                                    placeholder={controlItem.placeholder}
                                    label={controlItem.label}
                                    value={formData[controlItem.id]}
                                    onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            [controlItem.id]: event.target.value,
                                        });
                                    }}
                                />
                            ) : controlItem.componentType === "select" ? (
                                <SelectComponent
                                    key={index} // Provide a unique key (e.g., using the index)
                                    label={controlItem.label}
                                    options={controlItem.options}
                                    value={formData[controlItem.id]}
                                    onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            [controlItem.id]: event.target.value,
                                        });
                                    }}
                                />
                            ) : null
                        ))}
                        <button
                            onClick={handleAddProduct}
                            className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide"
                        >
                            {componentLevelLoader && componentLevelLoader.loading ? (
                                <ComponentLevelLoader
                                    text={CurrentUpdateProduct !== null ? 'Updating Product' : "Adding Product"}
                                    color={"#ffffff"}
                                    loading={componentLevelLoader && componentLevelLoader.loading}
                                />
                            ) : CurrentUpdateProduct !== null ? (
                                "Update Product"
                            ) : (
                                "Add Product"
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Notification />
        </div>
    )
}