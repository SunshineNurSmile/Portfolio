/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";
import ContactMe from "../islands/ContactMe.tsx";

const contact = () => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Contact</title>
            <NavBar />
            <ContactMe />
            <Footer />
        </div>
    );
};

export default contact;
