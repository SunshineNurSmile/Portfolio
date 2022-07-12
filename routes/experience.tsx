/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Experience = () => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Experience</title>

            <NavBar />

            <div class={tw`flex justify-center text-white pt-24`}>
                <div>
                    <h1 class={tw`text-pink-300 text-4xl`}>Experience</h1>
                    
                </div>
            </div>

            <Contact />
        </div>
    );
}

export default Experience