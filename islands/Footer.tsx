/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Contact = () => {
    const emailClick = () => {
        navigator.clipboard.writeText("wyxwyyyl@outlook.com");
        document.getElementById("email")!.classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("email")!.classList.add("hidden");
        }, 1000);
    };

    const wechatClick = () => {
        navigator.clipboard.writeText("wyy1055866054");
        document.getElementById("wechat")!.classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("wechat")!.classList.add("hidden");
        }, 1000);
    };

    return (
        <div
            class={tw`fixed bottom-0 w-screen px-4 py-2 flex flex-col justify-center items-center bg-gray-900 text-white`}
        >
            <div>
                <div
                    id="email"
                    class={tw`px-2 py-1 hidden border-white border border-2 rounded-full`}
                >
                    Email Copied
                </div>
                <div class={tw`flex justify-center items-center`}>
                    <svg
                        class={tw`h-6 w-6 m-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:cursor-pointer`}
                        onClick={emailClick}
                    >
                        <path
                            d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8H17v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                            fill="rgba(255,255,255,1)"
                        />
                    </svg>

                    <svg
                        class={tw`h-6 w-6 m-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:cursor-pointer`}
                        onClick={() => {
                            window.location.href =
                                "https://github.com/SunshineNurSmile";
                        }}
                    >
                        <path
                            d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                            fill="rgba(255,255,255,1)"
                        />
                    </svg>

                    <svg
                        class={tw`h-6 w-6 m-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:cursor-pointer`}
                        onClick={() => {
                            window.location.href =
                                "https://www.linkedin.com/in/yuanyiw";
                        }}
                    >
                        <path
                            d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"
                            fill="rgba(255,255,255,1)"
                        />
                    </svg>

                    <svg
                        class={tw`h-6 w-6 m-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:cursor-pointer`}
                        onClick={wechatClick}
                    >
                        <path
                            stroke="#FFFFFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.89703 15.6813C8.20622 15.7097 7.45784 15.4745 7.17 15.3533L4.59745 16.9254L5.35039 14.2324C3.91531 13.2773 3 11.8289 3 10.2073C3 7.33141 5.87918 5 9.43084 5C12.8736 5 15.6845 7.19061 15.8536 9.94435C15.7808 9.94196 15.7075 9.94076 15.634 9.94076C12.6704 9.94076 10.2679 11.8974 10.2679 14.311C10.2679 14.6702 10.3211 15.0193 10.4215 15.3533C10.9954 17.2637 13.1114 18.6813 15.634 18.6813C16.1734 18.6813 16.6942 18.6164 17.1853 18.4958L19.7 20L19.0106 17.7077C20.2242 16.9065 21 15.6825 21 14.311C21 12.5125 19.666 10.9677 17.7599 10.2972"
                            fill="#18181b"
                        ></path>
                    </svg>

                    <div
                        id="wechat"
                        class={tw`px-2 py-1 hidden text-white border-white border border-2 rounded-full`}
                    >
                        Wechat ID Copied
                    </div>
                </div>
            </div>
            <div class={tw`pt-1 hover:text-pink-300 animate-bounce`} id="contact">
                <a href="/contact">Contact Me</a>
            </div>
        </div>
    );
};

export default Contact;
