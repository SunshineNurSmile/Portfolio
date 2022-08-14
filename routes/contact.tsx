/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
//import { useState, useLayoutEffect } from "preact/hooks";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";
import ContactMe from "../islands/ContactMe.tsx";

const contact = () => {
    const BACKEND_URL = Deno.env.get("BACKEND_URL");

    return (
        <div class={tw`bg-gray-800 w-auto min-h-screen`}>
            <title>Yuanyi Wang | Contact</title>
            {/* {show ? <NavBar /> : null} */}
            <NavBar />
            <ContactMe url={BACKEND_URL!} />
            {/* {show ? <Footer /> : null} */}
            <Footer />
        </div>
    );
};

export default contact;
