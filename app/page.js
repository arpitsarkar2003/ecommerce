'use client';

import { useContext } from "react";
import { GlobalContext } from "./context/Index";

export default function Home() {

 const { isAuthUser } = useContext(GlobalContext);
  // console.log(isAuthUser);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>E-commerce</h1>
    </div>
  )
}
