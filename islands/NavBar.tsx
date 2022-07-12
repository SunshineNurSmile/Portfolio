/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Name from "../components/Name.tsx";

const jumpHome = () => {
    window.location.href = "/";
};

const NavBar = () => {
    return (
        <div
            class={tw`fixed top-0 w-screen px-4 py-2 flex justify-center bg-gray-900 sm:justify-between`}
        >
            <div
                class={tw`p-2 hidden text-white sm:flex sm:items-center sm:text-3xl`}
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
                    <a href="/education">Education</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out p-2 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/project">Project</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out p-2 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/experience">Experience</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out p-2 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/skill">Skill</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
