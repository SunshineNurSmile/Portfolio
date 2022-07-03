/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Nav() {
    return (
        <div class={tw`p-2 flex justify-center`}>
            <div class={tw`p-2 text-white hover:text-pink-300`}>
                <a href="/">Home</a>
            </div>

            <div class={tw`p-2 text-white`}>|</div>

            <div class={tw`p-2 text-white hover:text-pink-300`}>
                <a href="/about">About</a>
            </div>
        </div>
    );
}
