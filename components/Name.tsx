/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Name = () => {
    return (
        <div class={tw`flex justify-center items-center`}>
            <img
                src="/head.jpg"
                class={tw`rounded-full w-10 h-10 mr-4 hover:cursor-pointer`}
                alt="Yuanyi Wang Profile Picture"
            />

            <div class={tw`flex flex-row`}>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    Y
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    u
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    a
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    n
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    y
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    i
                </p>
                <p class={tw`hover:cursor-pointer`}>&nbsp;</p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    W
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    a
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    n
                </p>
                <p
                    class={tw`transition ease-in-out duration-100 hover:text-pink-300 hover:cursor-pointer`}
                >
                    g
                </p>
            </div>
        </div>
    );
};

export default Name;
