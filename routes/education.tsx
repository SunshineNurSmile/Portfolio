/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import Course, { error, course } from "../helper/course.tsx";
import BACKEND_URL from "../helper/apiUrl.tsx";

export const handler: Handlers<Array<Course> | null> = {
    async GET(_, ctx) {
        const dbURL = BACKEND_URL + "/courses";
        const resp = await fetch(dbURL);
        if (resp.status === 404) {
            console.log("404");
            return ctx.render(null);
        }
        const courses: Array<Course> = await resp.json();
        return ctx.render(courses);
    },
};

const Education = ({ data }: PageProps<Array<Course> | null>) => {
    

    return (
        <div class={tw`bg-gray-800 w-auto min-h-screen`}>
            <title>Yuanyi Wang | Education</title>

            <NavBar />

            <div class={tw`flex justify-center text-white pt-24 pb-24`}>
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
                    {!data || data?.length == 0 ? error() : data.map(course)}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Education;
