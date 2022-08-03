/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Education = () => {
    return (
        <div class={tw`bg-gray-800 w-auto min-h-screen`}>
            <title>Yuanyi Wang | Education</title>

            <NavBar />

            <div class={tw`flex justify-center text-white pt-24 pb-20`}>
                <div
                    class={tw`flex flex-col justify-center w-full max-w-2xl ml-2 mr-2`}
                >
                    <h1 class={tw`flex justify-center text-pink-300 text-4xl`}>
                        Degrees
                    </h1>
                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex justify-between items-center`}>
                            <div class={tw`text-2xl`}>Boston University</div>
                            <div class={tw`text-md`}>09/2021 - 12/2022</div>
                        </div>

                        <div class={tw`pt-4`}>
                            <ul>
                                <li>
                                    Master of Science in{" "}
                                    <span class={tw`text-pink-300`}>
                                        Computer Science
                                    </span>{" "}
                                    (MET)
                                </li>
                                <li>
                                    Current GPA:{" "}
                                    <span class={tw`text-pink-300`}>
                                        3.96 / 4.00
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div class={tw`flex justify-between items-center`}>
                            <div class={tw`text-2xl`}>UMass Amherst</div>
                            <div class={tw`text-md`}>09/2016 - 05/2021</div>
                        </div>

                        <div class={tw`pt-4`}>
                            <ul>
                                <li>
                                    Bachelor of Science in{" "}
                                    <span class={tw`text-pink-300`}>
                                        Applied Mathematics
                                    </span>
                                </li>
                                <li>
                                    Music Minor in{" "}
                                    <span class={tw`text-pink-300`}>
                                        Piano Performance
                                    </span>
                                </li>
                                <li>
                                    <span class={tw`text-pink-300`}>
                                        Chancellor's Award
                                    </span>{" "}
                                    from 2016 to 2020
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h1
                        class={tw`flex justify-center text-pink-300 text-4xl mt-10`}
                    >
                        Courses
                    </h1>
                    <div class={tw`flex flex-col justify-center`}>
                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 555</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A
                                    </span>
                                </div>
                            </div>
                            <div>
                                Foundations of Machine Learning |{" "}
                                <span class={tw`text-pink-300`}>R</span>
                            </div>
                        </div>

                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 566</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A-
                                    </span>
                                </div>
                            </div>
                            <div>
                                Analysis of Algorithms |{" "}
                                <span class={tw`text-pink-300`}>Python</span>
                            </div>
                        </div>

                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 575</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A
                                    </span>
                                </div>
                            </div>
                            <div>
                                Operating Systems |{" "}
                                <span class={tw`text-pink-300`}>C & Linux</span>
                            </div>
                        </div>

                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 579</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A
                                    </span>
                                </div>
                            </div>
                            <div>
                                Database Management |{" "}
                                <span class={tw`text-pink-300`}>MySQL</span>
                            </div>
                        </div>
                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 662</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A
                                    </span>
                                </div>
                            </div>
                            <div>Computer Language Theory</div>
                        </div>
                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 673</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A
                                    </span>
                                </div>
                            </div>
                            <div>
                                Software Engineering |{" "}
                                <span class={tw`text-pink-300`}>Agile</span>
                            </div>
                        </div>

                        <div
                            class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                        >
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-2xl`}>MET CS 683</div>
                                <div>
                                    Grade:{" "}
                                    <span class={tw`text-lg text-pink-300`}>
                                        A
                                    </span>
                                </div>
                            </div>
                            <div>
                                Android Application Development |{" "}
                                <span class={tw`text-pink-300`}>Kotlin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default Education;
