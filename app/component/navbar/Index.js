'use client';

import { GlobalContext } from "@/app/context/Index";
import { adminNavOptions, navOptions } from "@/app/utils";
import { Fragment, useContext } from "react";
import CommonModal from "../CommonModal/Index";

const isAdminView = false;
const isAuthView = true;
const user = {
    role: 'admin'
}

const adminview = (role) => {
    if (role === 'admin' && isAdminView) {
        return <button className={
            "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
        }>{"Client View"}</button>
    } else {
        return <button className={
            "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
        }>{"Admin view"}</button>
    }

}

function NavItems({ isModalView = false }) {



    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? '' : 'hidden'}`} id="nav-items">
            <ul
                className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${isModalView ? "border-none" : "border border-gray-100"
                    }`}
            >
                {
                    isAdminView ?
                        adminNavOptions.map((item) => (
                            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                                key={item.id}>
                                {item.label}
                            </li>
                        )) : navOptions.map((item) => (
                            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                                key={item.id}>
                                {item.label}
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default function Navbar() {

    const { showNavModal, setShowNavModal } = useContext(GlobalContext);



    return (
        <div>
            <div className="bg-white fixed w-full z-20 left-0 top-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center cursor-pointer">
                        <span className="self-center whitespace-nowrap text-2xl font-semibold">Ecommerce</span>
                    </div>
                    <div className="flex md:order-2 gap-2">
                        {
                            !isAdminView && isAuthView ?
                                (
                                    <Fragment>
                                        <button className={
                                            "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                        }>Account</button>
                                        <button className={
                                            "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                        }>Cart</button>
                                    </Fragment>
                                ) : null
                        }
                        {
                            user?.role === 'admin' ?
                                adminview(user.role)
                                : null
                        }
                        {
                            isAuthView ? <button className={
                                "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                            }>Logout</button> : <button className={
                                "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                            }>Login</button>
                        }
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setShowNavModal(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <NavItems />
                </div>
            </div>

            <CommonModal
                showModalTitle={false}
                mainContent={<NavItems isModalView={true} />}
                show={showNavModal} setShow={setShowNavModal} />
        </div>
    )
}