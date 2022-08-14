/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import ContactMe from "../islands/ContactMe.tsx";

const contact = () => {
    const BACKEND_URL = Deno.env.get("BACKEND_URL");

    return (
        <div class={tw`bg-gray-800 w-auto min-h-screen`}>
            <Head>
                <title>Yuanyi Wang | Contact</title>
            </Head>

            <ContactMe BACKEND_URL={BACKEND_URL!} />
        </div>
    );
};

export default contact;
