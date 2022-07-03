/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function About() {
  return (
    <div class={tw`flex bg-gray-800 mx-auto h-screen w-screen justify-center items-center`}>
      <p class={tw`text-white`}>
        About Page.
      </p>
    </div>
  );
}