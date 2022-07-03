/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`flex justify-center`}>
        This is going to be my portfolio site.
      </p>
    </div>
  );
}
