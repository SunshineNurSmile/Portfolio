/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Home = () => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Home</title>

            <NavBar />

            <div class={tw`flex justify-center text-white p-4`}>
                This is going to be my portfolio website.
            </div>

            <Contact />
        </div>
    );
};

export default Home;
