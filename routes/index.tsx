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

            <div class={tw`flex flex-row justify-center pt-20 w-screen`}>
                <div>
                    <h1 class={tw`text-8xl text-pink-300 py-6`}>Hello!</h1>
                    <div class={tw`text-3xl text-white`}>
                        <p class={tw`py-1`}>
                            My English name is{" "}
                            <span class={tw`text-pink-300`}>Will</span>
                        </p>
                        <p class={tw`py-1`}>and I'm currently a student at</p>
                        <p class={tw`py-1`}>Boston University</p>
                    </div>
                </div>
            </div>

            <div
                class={tw`absolute bottom-20 w-screen flex justify-center text-white`}
            >
                Please note that this website is at an early stage
            </div>

            <Contact />
        </div>
    );
};

export default Home;
