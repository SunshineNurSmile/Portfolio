/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const NotFoundPage = ({url}: UnknownPageProps) => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | 404</title>

            <NavBar />

            <div
                class={tw`flex flex-col justify-center items-center w-screen h-screen`}
            >
                <div class={tw`text-6xl text-pink-300 sm:text-8xl`}>
                    Error! 404
                </div>
                <div class={tw`text-2xl text-white sm:text-4xl`}>yuanyiwang.info{url.pathname}</div>
                <div class={tw`text-2xl text-white sm:text-4xl`}>
                    Does Not Exist
                </div>
                <div
                    class={tw`text-4xl text-pink-300 text-underline sm:text-6xl hover:text-white`}
                >
                    <a href="/">Home</a>
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default NotFoundPage;
