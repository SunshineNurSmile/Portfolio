/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const About = () => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | About</title>

            <NavBar />

            <div class={tw`flex justify-center text-white p-4`}>
                About Page.
            </div>

            <Contact />
        </div>
    );
};

export default About;
