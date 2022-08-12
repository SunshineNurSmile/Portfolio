/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";

const BACKEND_URL = Deno.env.get("BACKEND_URL");
export { BACKEND_URL };

const Home = () => {
    return (
        <div class={tw`bg-gray-800 h-screen w-screen`}>
            <title>Yuanyi Wang | Home</title>

            <NavBar />

            <div>
                <img
                    src="/background.jpg"
                    class={tw`w-screen h-screen object-cover`}
                    alt="Yuanyi Wang Background Picture"
                />
            </div>

            <div class={tw`absolute top-40 left-2 text-white sm:left-20`}>
                <div>
                    <h1 class={tw`text-8xl text-pink-300 py-6`}>Hello!</h1>
                    <div class={tw`text-3xl`}>
                        <p class={tw`py-1`}>
                            My English name is{" "}
                            <span class={tw`text-pink-300`}>Will</span>
                        </p>
                        <p class={tw`py-1`}>I'm a Master's student at</p>
                        <p class={tw`py-1`}>Boston University</p>
                    </div>
                </div>
            </div>

            <div
                class={tw`absolute bottom-24 w-screen flex flex-col justify-center text-white`}
            >
                <div class={tw`flex justify-center`}>
                    Please note that this website is at an early stage
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
