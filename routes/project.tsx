/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Project = () => {
    return (
        <div class={tw`bg-gray-800 w-auto`}>
            <title>Yuanyi Wang | Project</title>

            <NavBar />

            <div class={tw`flex justify-center text-white pt-24 pb-20`}>
                <div class={tw`flex flex-col justify-center w-full max-w-xl ml-2 mr-2`}>
                    <h1 class={tw`flex justify-center text-pink-300 text-4xl`}>
                        Software Projects
                    </h1>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <a
                                class={tw`flex justify-center text-2xl hover:text-pink-300`}
                                href="https://github.com/SunshineNurSmile/Fitness-Trainer-Finder-Frontend"
                            >
                                Fitness Trainer Finder
                            </a>
                            <a class={tw`flex justify-center text-xs hover:text-pink-300 hover:cursor-pointer`} href="https://youtu.be/Oj4OSOzPq7Y">
                                Video Demo
                            </a>
                        </div>
                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300 `}>
                                    Languages
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            HTML
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            CSS
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            JavaScript
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Tools<span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Django
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            SQLite
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Vue Standalone Script
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Deployment
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            AWS EC2 (Ubuntu)
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Google Cloud E2 (Ubuntu)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Features
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            <span class={tw`text-pink-300`}>
                                                40&nbsp;
                                            </span>
                                            individual pages
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Over{" "}
                                            <span class={tw`text-pink-300`}>
                                                &nbsp;200&nbsp;
                                            </span>
                                            test users
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            <span class={tw`text-pink-300`}>
                                                9&nbsp;
                                            </span>
                                            table relational database
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Sliced video upload
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Simulated real-time chat
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            PayPal Sandbox
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <a
                                class={tw`flex justify-center text-2xl hover:text-pink-300`}
                                href="https://github.com/SunshineNurSmile/Android-Music-Player"
                            >
                                Android Music Player
                            </a>
                            <a class={tw`flex justify-center text-xs hover:text-pink-300 hover:cursor-pointer`} href="https://youtube.com/shorts/KMeHsfej5e0">
                                Video Demo
                            </a>
                        </div>
                        <div class={tw`flex flex-col justify-center pt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300 `}>
                                    Languages
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Java
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Tools<span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Android Native
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Features
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            File organization by Album
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            File organization by Path
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            High-fidelity media decoding
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            DSD playback support
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Advanced metadata display
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <a
                                class={tw`flex justify-center text-2xl hover:text-pink-300`}
                                href="https://github.com/SunshineNurSmile/Portfolio"
                            >
                                Personal Portfolio
                            </a>
                            <p class={tw`flex justify-center text-xs`}>
                                Under Development
                            </p>
                        </div>
                        <div class={tw`flex flex-col justify-center pt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300 `}>
                                    Languages
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            TypeScript
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Tools<span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Deno Fresh
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Preact
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Twind
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 pr-6`}>
                                    Deployment
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Deno Deploy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <a
                                class={tw`flex justify-center text-2xl hover:text-pink-300`}
                                href="https://github.com/SunshineNurSmile/Tiffany-Portfolio"
                            >
                                Other's Portfolio
                            </a>
                            <p class={tw`flex justify-center text-xs`}>
                                Under Development
                            </p>
                        </div>
                        <div class={tw`flex flex-col justify-center pt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300 `}>
                                    Languages
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            TypeScript
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Tools<span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Next
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            React
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Tailwind
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 pr-6`}>
                                    Deployment
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Vercel Deploy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <a
                                class={tw`flex justify-center text-2xl hover:text-pink-300`}
                                href="https://github.com/SunshineNurSmile/TikTok-Clone"
                            >
                                TikTok Website Clone
                            </a>
                            <p class={tw`flex justify-center text-xs`}>
                                Youtube Tutorial
                            </p>
                        </div>
                        <div class={tw`flex flex-col justify-center pt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300 `}>
                                    Languages
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            TypeScript
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Tools<span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Next
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            React
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Tailwind
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Sanity
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 pr-6`}>
                                    Deployment
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Vercel Deploy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default Project;
