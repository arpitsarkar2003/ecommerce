export const navOptions = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "listing",
      label: "All Products",
      path: "/product/listing/all-products",
    },
    {
      id: "listingMen",
      label: "Men",
      path: "/product/listing/men",
    },
    {
      id: "listingWomen",
      label: "Women",
      path: "/product/listing/women",
    },
    {
      id: "listingKids",
      label: "kids",
      path: "/product/listing/kids",
    },
  ];
  
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "Manage All Products",
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/admin-view/add-product",
    },
  ];
  
  export const registrationFormControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter your name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
    {
      id: "role",
      type: "",
      placeholder: "",
      label: "Role",
      componentType: "select",
      options: [
        {
          id: "admin",
          label: "Admin",
        },
        {
          id: "customer",
          label: "customer",
        },
      ],
    },
  ];
  
  export const loginFormControls = [
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
  ];


  export const adminAddProductformControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "price",
      type: "number",
      placeholder: "Enter price",
      label: "Price",
      componentType: "input",
    },
    {
      id: "description",
      type: "text",
      placeholder: "Enter description",
      label: "Description",
      componentType: "input",
    },
    {
      id: "category",
      type: "",
      placeholder: "",
      label: "Category",
      componentType: "select",
      options: [
        {
          id: "men",
          label: "Men",
        },
        {
          id: "women",
          label: "Women",
        },
        {
          id: "kids",
          label: "Kids",
        },
        {
          id: "unisex",
          label: "UniSex",
        },
      ],
    },
    {
      id: "deliveryInfo",
      type: "text",
      placeholder: "Enter deliveryInfo",
      label: "Delivery Info",
      componentType: "input",
    },
    {
      id: "onSale",
      type: "",
      placeholder: "",
      label: "On Sale",
      componentType: "select",
      options: [
        {
          id: "yes",
          label: "Yes",
        },
        {
          id: "no",
          label: "No",
        },
      ],
    },
    {
      id: "priceDrop",
      type: "number",
      placeholder: "Enter Price Drop",
      label: "Price Drop",
      componentType: "input",
    },
  ];
  
  export const AvailableSizes = [
    {
      id: "s",
      label: "S",
    },
    {
      id: "m",
      label: "M",
    },
    {
      id: "l",
      label: "L",
    },
    {
      id: "xl",
      label: "XL",
    },
    {
      id: "xxl",
      label: "XXL",
    },
    {
      id: "uk7",
      label: "UK 7",
    },
    {
      id: "uk8",
      label: "UK 8",
    },
    {
      id: "uk9",
      label: "UK 9",
    },
    {
      id: "uk10",
      label: "UK 10",
    },
    {
      id: "uk11",
      label: "UK 11",
    },
  ];



  export const firebaseConfig = {
    apiKey: "AIzaSyBgOALPlkpSpZGvpgpQAVqwBZqgiYq_pls",
    authDomain: "next-js-ecommerce-8d724.firebaseapp.com",
    projectId: "next-js-ecommerce-8d724",
    storageBucket: "next-js-ecommerce-8d724.appspot.com",
    messagingSenderId: "198386629977",
    appId: "1:198386629977:web:9eab8c2b5c15c464496048",
    measurementId: "G-GYXBFHND5D"
  };



  export const firebaseStorageURL = 'gs://next-js-ecommerce-8d724.appspot.com'