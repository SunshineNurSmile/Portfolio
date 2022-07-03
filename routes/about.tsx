/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../components/NavBar.tsx";

export default function About() {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | About</title>

            <NavBar />

            <div class={tw`flex justify-center text-white p-4`}>
                About Page.
            </div>
        </div>
    );
}
