/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Name from "../components/Name.tsx";

const jumpHome = () => {
    window.location.href = "/";
};

const showMenu = () => {
    document.getElementById("menu")!.classList.remove("hidden");
    document.getElementById("name")!.classList.add("hidden");
    document.getElementById("button")!.classList.add("hidden");
    document.getElementById("nav")!.classList.remove("justify-between");
    document.getElementById("nav")!.classList.add("justify-center");
};

const NavBar = () => {
    return (
        <div
            class={tw`fixed top-0 w-screen px-4 py-2 flex justify-between bg-gray-900`}
            id="nav"
        >
            <div
                class={tw`p-2 text-3xl text-white`}
                id="name"
                onClick={jumpHome}
            >
                <Name />
            </div>

            <div class={tw`flex items-center md:hidden mr-6`} id="button">
                <svg
                    class={tw`h-6 w-6 hover:cursor-pointer`}
                    onClick={showMenu}
                >
                    <path
                        d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6 21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6zM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12 21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12zM4 17C3.44772 17 3 17.4477 3 18 3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18 21 17.4477 20.5523 17 20 17H4z"
                        fill="rgba(255,255,255,1)"
                    />
                </svg>
            </div>

            <div
                class={tw`hidden p-2 flex justify-center items-center md:flex`}
                id="menu"
            >
                <div
                    class={tw`transition ease-in-out sm:p-1 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/">Home</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out sm:p-1 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/education">Education</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out sm:p-1 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/project">Project</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out sm:p-1 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/experience">Experience</a>
                </div>

                <div class={tw`p-2 text-white`}>|</div>

                <div
                    class={tw`transition ease-in-out sm:p-1 text-white hover:text-pink-300 hover:-translate-y-1 duration-300`}
                >
                    <a href="/skill">Skill</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
