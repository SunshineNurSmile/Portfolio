/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ContactMe from "../islands/ContactMe.tsx";

const contact = () => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Contact</title>
            <ContactMe />
        </div>
    );
};

export default contact;
