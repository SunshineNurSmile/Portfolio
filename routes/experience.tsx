/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";
import Contact from "../islands/Contact.tsx";

const Experience = () => {
    return (
        <div class={tw`bg-gray-800 w-auto min-h-screen`}>
            <title>Yuanyi Wang | Experience</title>

            <NavBar />

            <div class={tw`flex justify-center text-white pt-24 pb-20`}>
                <div
                    class={tw`flex flex-col justify-center w-full max-w-2xl ml-2 mr-2`}
                >
                    <h1 class={tw`flex justify-center text-pink-300 text-4xl`}>
                        Experience
                    </h1>
                    <div
                        class={tw`flex flex-col justify-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <div
                            class={tw`flex justify-center text-2xl hover:cursor-default`}
                        >
                            Suirui Group Co., Ltd.
                        </div>
                        <div class={tw`flex flex-col justify-center mt-4`}>
                            <div class={tw`flex justify-between`}>
                                <div class={tw`text-pink-300 `}>
                                    Position
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div class={tw`flex justify-end`}>
                                    Marketing Intern
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Duration
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div class={tw`flex justify-end`}>
                                    06/2017 - 08/2017
                                </div>
                            </div>
                            <div class={tw`flex justify-between mt-4`}>
                                <div class={tw`text-pink-300 `}>
                                    Location
                                    <span class={tw`text-white`}>:</span>
                                </div>
                                <div class={tw`flex justify-end`}>
                                    Beijing, China
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1
                        class={tw`flex justify-center text-pink-300 text-4xl mt-6`}
                    >
                        Details
                    </h1>

                    <div
                        class={tw`text-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <p>
                            I understand that, although marketing and software
                            engineering seem to be two parallel fields, they do
                            intersect at certain points.
                        </p>
                    </div>

                    <div
                        class={tw`text-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <p>
                            I have gained experience in team collaboration,
                            communication, problem solving, and adaptation to
                            unfamiliar environments and technologies. All of
                            which are necessary abilities for a successful
                            software engineering career.
                        </p>
                    </div>

                    <div
                        class={tw`text-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <p>
                            During the two-month internship at Suirui Group Co.,
                            Ltd, my first task was the organization and
                            categorization of 15,000 potential customers’
                            information. I used Microsoft Excel to efficiently
                            rearrange the customer information based on
                            criterias such as level of interest, job title,
                            phone number, etc.
                        </p>
                    </div>
                    <div
                        class={tw`text-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <p>
                            As I gained acknowledgement and trust from my
                            coworkers and supervisor through the quality and
                            efficiency of my work, I was assigned more important
                            and challenging tasks including translation of the
                            user manual of the company’s product from Chinese to
                            English, composing advertisements through different
                            kinds of means and platforms, and inquiry and
                            organization of partnership companies’ information
                            and negotiation of details for taking company’s
                            product pictures.
                        </p>
                    </div>
                    <div
                        class={tw`text-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <p>
                            For advertisements, I started with writing short
                            paragraphs by associating the company’s product with
                            world-wide trending topics, and how our product
                            satisfies the customers’ needs. Such short
                            paragraphs were published through the company’s
                            official WeChat business account. Afterwards, I
                            constructed graphical advertisements by editing
                            existing non-copyrighted pictures using Adobe
                            Photoshop and complemented them with
                            attention-drawing stories. The outcomes were
                            published through not only our official WeChat
                            account, but also websites and other business
                            platforms. Cheng Shu, the CEO of the company
                            reviewed and complimented on the quality of my work
                            in person.
                        </p>
                    </div>
                    <div
                        class={tw`text-center bg-gray-900 border-none rounded-lg p-6 mt-6`}
                    >
                        <p>
                            My final major task was to acquire and organize
                            information from partnership photography companies
                            by sending Emails and making phone calls. I
                            negotiated with the representatives of each company
                            about details such as cost, location, time, and
                            number of different kinds of pictures needed. My
                            supervisor Jincheng Jia spoke highly of the quality
                            and efficiency of my work, my quick adaptation to
                            new environments, my creativity and novel ways of
                            solving problems, and my outstanding interpersonal
                            skills when reporting the summary of my internship
                            to the CEO of the company.
                        </p>
                    </div>
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default Experience;
