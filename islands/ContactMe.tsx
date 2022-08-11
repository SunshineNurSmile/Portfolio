/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import testEmail from "../helper/testEmail.tsx";

const ContactMe = () => {
    const getElements = () => {
        const nameEl = document.getElementById("name") as HTMLInputElement;
        const name = nameEl.value;
        const emailEl = document.getElementById("email") as HTMLInputElement;
        const email = emailEl.value;
        const messageEl = document.getElementById(
            "message"
        ) as HTMLInputElement;
        const message = messageEl.value;
        const form = document.querySelector("form");
        return { name, email, message, form };
    };

    const send = () => {
        const { name, email, message, form } = getElements();
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

        fetch("https://portfoliodb.deno.dev/contact", {
            method: "POST",
            body: JSON.stringify(data),
        });

        form!.reset();
    };

    return (
        <div class={tw``}>
            <form>
                <div class="info">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        required
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        id="message"
                        required
                    ></textarea>
                </div>
                <div class={tw`text-white`} onClick={send}>
                    Send
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
