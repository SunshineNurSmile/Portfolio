/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../components/NavBar.tsx";

export default function Home() {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Home</title>

            <NavBar />

            <div class={tw`flex justify-center text-white p-4`}>
                This is going to be my portfolio site.
            </div>
        </div>
    );
}
