/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Skill = () => {
    return (
        <div class={tw`bg-gray-800 w-auto`}>
            <title>Yuanyi Wang | Skill</title>

            <NavBar />

            <div class={tw`flex justify-center text-white pt-24 pb-20`}>
                <div
                    class={tw`flex flex-col justify-center w-full max-w-xl ml-2 mr-2`}
                >
                    <h1 class={tw`flex justify-center text-pink-300 text-4xl`}>
                        Skills
                    </h1>
                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <div class={tw`flex justify-center text-2xl`}>
                                Programming Languages
                            </div>
                            <div class={tw`flex justify-center text-xs`}>
                                Ordered by Proficiency
                            </div>
                        </div>

                        <div class={tw`text-center mt-4`}>
                            <ul>
                                <li>Java | HTML | CSS | R</li>
                                <li>JavaScript | Kotlin | Python</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex flex-col justify-center`}>
                            <div class={tw`flex justify-center text-2xl`}>
                                Technologies and Tools
                            </div>
                            <div class={tw`flex justify-center text-xs`}>
                                Unordered
                            </div>
                        </div>

                        <div class={tw`text-center mt-4`}>
                            <ul>
                                <li>Vue Standalone Script | React</li>
                                <li>Next | Fresh | Remix</li>
                                <li>AWS | Google Cloud | Linux</li>
                                <li>Git | MySQL | LaTeX</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`text-center text-2xl`}>Piano</div>

                        <div class={tw`text-center mt-4`}>
                            <p>
                                I started playing the piano since I was{" "}
                                <span class={tw`text-pink-300`}>4</span> years
                                old
                            </p>
                        </div>

                        <div class={tw`text-center text-lg mt-4 text-pink-300`}>
                            My Repertoires
                        </div>
                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300`}>
                                    Franz Liszt
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li
                                            class={tw`flex justify-end items-center`}
                                        >
                                            Mephisto Waltz No. 1{" "}
                                            <span
                                                class={tw`text-xs text-pink-300`}
                                            >
                                                <a href="https://youtu.be/5WIEvTRGla8">
                                                    Video
                                                </a>
                                            </span>
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Rapsodie Espagnole
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Hungarian Rapsodie No. 2
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Hungarian Rapsodie No. 2
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            La Campanella
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Widmung
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Ständchen
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300`}>
                                    Pyotr Ilyich Tchaikovsky
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li
                                            class={tw`flex justify-end items-center`}
                                        >
                                            Piano Concerto No. 1{" "}
                                            <span
                                                class={tw`text-xs text-pink-300`}
                                            >
                                                <a href="https://youtu.be/DDB6CZ19Xl8">
                                                    Video
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300`}>
                                    Sergei Rachmaninoff
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li
                                            class={tw`flex justify-end items-center`}
                                        >
                                            Prelude Op. 23, No. 4{" "}
                                            <span
                                                class={tw`text-xs text-pink-300`}
                                            >
                                                <a href="https://drive.google.com/file/d/1BQBgRoUb-goEusQK-txYLTBrXeAsywsd/view?usp=sharing">
                                                    Recording
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300`}>
                                    Ludwig van Beethoven
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Moonlight Sonata
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300`}>
                                    Frédéric Chopin
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div>
                                    <ul>
                                        <li class={tw`flex justify-end`}>
                                            Grande Valse Brillante
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Etudes Op. 10, No. 5
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Etudes Op. 10, No. 12
                                        </li>
                                        <li class={tw`flex justify-end`}>
                                            Nocturne Op. 9, No. 2
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

export default Skill;
