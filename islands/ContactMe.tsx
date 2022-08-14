/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import testEmail from "../helper/testEmail.tsx";
import Message from "../helper/message.tsx";

const ContactMe = ({ url }: { url: string }) => {
    const WAIT_TIME = 60;
    const msg: Message = {
        name: "",
        email: "",
        message: "",
    };

    const [msgLength, setMsgLength] = useState(0);
    const [time, setTime] = useState(false);
    const [second, setSecond] = useState(WAIT_TIME);
    const [message, setMessage] = useState(msg);
    
    const handleEmailChange = (event: any) => {
        setMessage((prev) => {
            return {
                ...prev,
                email: event.target.value,
            };
        });
    };

    const handleNameChange = (event: any) => {
        setMessage((prev) => {
            return {
                ...prev,
                name: event.target.value,
            };
        });
    };

    const handleMessageChange = (event: any) => {
        setMessage((prev) => {
            return {
                ...prev,
                message: event.target.value,
            };
        });
        setMsgLength(event.target.value.length);
    };

    useEffect(() => {
        let timer: number;

        function countdown() {
            setSecond((preSecond) => {
                if (preSecond <= 1) {
                    setTime(false);
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

    const send = async (event: any) => {
        event.preventDefault();
        if (!message.name || !message.email || !message.message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!testEmail(message.email)) {
            alert("Please enter a valid email.");
            document.getElementById("email")!.focus();
            return;
        }

        const contactUrl = url + "/contact";

        await fetch(contactUrl, {
            method: "POST",
            body: JSON.stringify(message),
        })
            .then(() => {
                document.querySelector("form")!.reset();
                setMsgLength(0);
                setMessage(msg);
                setTime(true);
                alert("Message sent!");
            })
            .catch((err) => {
                console.log(err);
                alert("Could not send message. Please try again later.");
            });
    };

    return (
        <div
            class={tw`flex flex-col justify-center items-center pt-24 pb-24 ml-2 mr-2`}
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
                        name="name"
                        onInput={handleNameChange}
                    />
                    <input
                        class={tw`w-full p-2 mt-2 border-2 rounded-lg outline-none focus:border-pink-300`}
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        onInput={handleEmailChange}
                    />
                </div>
                <div>
                    <textarea
                        class={tw`w-full h-40 p-2 mt-2 border-2 rounded-lg outline-none focus:border-pink-300 resize-none`}
                        placeholder="Message"
                        id="message"
                        name="message"
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
