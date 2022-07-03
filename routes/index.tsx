/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`flex bg-gray-800 mx-auto h-screen w-screen justify-center items-center`}>
      <p class={tw`text-white`}>
        This is going to be my portfolio site.
      </p>
    </div>
  );
}
