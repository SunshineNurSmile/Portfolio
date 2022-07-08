/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Name from "../components/Name.tsx";

function jumpHome() {
    window.location.href = "/";
}

export default function NavBar() {
    return (
        <div
            class={tw`px-4 py-2 flex justify-center bg-gray-900 sm:justify-between`}
        >
            <div
                class={tw`p-2 hidden text-white sm:flex sm:items-center sm:text-4xl`}
                onClick={jumpHome}
            >
                <Name />
            </div>
            <div class={tw`p-2 flex justify-center items-center`}>
                <div
                    class={tw`transition ease-in-out p-2 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/">Home</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out p-2 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/about">About</a>
                </div>
            </div>
        </div>
    );
}
