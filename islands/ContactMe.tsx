/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import testEmail from "../helper/testEmail.tsx";

const ContactMe = () => {
    const WAIT_TIME = 5;
    const [msgLength, setMsgLength] = useState(0);

    const [email, setEmail] = useState("");
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const [name, setName] = useState("");
    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const [message, setMessage] = useState("");
    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
        setMsgLength(event.target.value.length);
    };

    const [time, setTime] = useState(false);
    const [second, setSecond] = useState(WAIT_TIME);

    if (localStorage.getItem("wait") === "true") {
        setTime(true);
    }

    useEffect(() => {
        let timer: number;

        function countdown() {
            setSecond((preSecond) => {
                if (preSecond <= 1) {
                    setTime(false);
                    localStorage.setItem("wait", "false");
                    return WAIT_TIME;
                } else {
                    timer = setTimeout(countdown, 1000);
                    return preSecond - 1;
                }
            });
        }

        if (time) {
            timer = setTimeout(countdown, 1000);
        }
        return () => clearTimeout(timer);
    }, [time]);

    const send = async () => {
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!testEmail(email)) {
            alert("Please enter a valid email.");
            document.getElementById("email")!.focus();
            return;
        }

        const data = {
            name,
            email,
            message,
        };

        const contactUrl = Deno.env.get("BACKEND_URL") + "/contact";

        await fetch(contactUrl, {
            method: "POST",
            body: JSON.stringify(data),
        }).catch(() => {
            localStorage.setItem("wait", "true");
            setTime(true);
            alert("Message sent!");
        });
    };

    return (
        <div
            class={tw`flex flex-col justify-center items-center pt-24 ml-2 mr-2`}
        >
            <h1 class={tw`text-white text-4xl`}>Contact Me</h1>
            <form
                class={tw`p-6 bg-gray-900 border-none rounded-lg w-full max-w-2xl mt-6`}
            >
                <div>
                    <input
                        class={tw`w-full p-2 border-2 rounded-lg outline-none focus:border-pink-300`}
                        type="text"
                        placeholder="Name"
                        id="name"
                        onInput={handleNameChange}
                    />
                    <input
                        class={tw`w-full p-2 mt-2 border-2 rounded-lg outline-none focus:border-pink-300`}
                        type="email"
                        placeholder="Email"
                        id="email"
                        onInput={handleEmailChange}
                    />
                </div>
                <div>
                    <textarea
                        class={tw`w-full h-40 p-2 mt-2 border-2 rounded-lg outline-none focus:border-pink-300 resize-none`}
                        placeholder="Message"
                        id="message"
                        maxLength={1000}
                        onInput={handleMessageChange}
                    ></textarea>
                    <div class={tw`text-white flex justify-end`}>
                        {msgLength} / 1000
                    </div>
                </div>
                <div class={tw`w-full flex justify-center mt-4`}>
                    <button
                        class={tw`w-24 transition ease-in duration-600 border rounded text-white text-center text-2xl py-1 enabled:hover:bg-pink-300 enabled:hover:border-pink-300 disabled:text-gray-500 disabled:border-gray-500 disabled:hover:cursor-not-allowed`}
                        onClick={send}
                        disabled={time}
                        id="button"
                    >
                        {!time ? "Send" : second + "s"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
