/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Error = (props: PageProps) => {
    const url = "yuanyiwang.info/" + props.params.error;

    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | 404</title>

            <NavBar />

            <div class={tw`flex flex-col justify-center items-center w-screen h-screen`}>
                <div class={tw`text-8xl text-pink-300`}>Error! 404</div>
                <div class={tw`text-4xl text-white`}>{url}</div>
                <div class={tw`text-4xl text-white`}>Does Not Exist</div>
            </div>

            <Contact />
        </div>
    );
};

export default Error;
