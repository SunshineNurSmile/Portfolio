/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";

const NotFoundPage = ({ url }: UnknownPageProps) => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <Head>
                <title>Yuanyi Wang | 404</title>
            </Head>

            <NavBar />

            <div
                class={tw`flex flex-col justify-center items-center w-screen h-screen`}
            >
                <div class={tw`text-6xl text-pink-300 sm:text-8xl`}>
                    Error! 404
                </div>
                <div class={tw`text-2xl text-white sm:text-4xl`}>
                    yuanyiwang.info{url.pathname}
                </div>
                <div class={tw`text-2xl text-white sm:text-4xl`}>
                    Does Not Exist
                </div>
                <div
                    class={tw`text-4xl text-pink-300 text-underline sm:text-6xl hover:text-white`}
                >
                    <a href="/">Home</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NotFoundPage;
