/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";
import ContactMe from "../islands/ContactMe.tsx";

const contact = () => {
    const BACKEND_URL = Deno.env.get("BACKEND_URL");
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Contact</title>
            <NavBar />
            <ContactMe url={BACKEND_URL!} />
            <Footer />
        </div>
    );
};

export default contact;
