/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Nav from "../islands/nav.tsx";

export default function About() {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | About</title>

            <Nav />

            <div class={tw`flex justify-center text-white p-4`}>
                About Page.
            </div>
        </div>
    );
}
