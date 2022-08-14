/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Course {
    number: string;
    title: string;
    tech: string;
    grade: string;
}

const error = () => {
    return (
        <div class={tw`flex justify-center items-center`}>
            Failed to retrieve courses.
        </div>
    );
};

const course = (course: Course) => {
    return (
        <div
            class={tw`bg-gray-900 border-none rounded-lg p-6 mt-6`}
        >
            <div class={tw`flex justify-between`}>
                <div class={tw`text-2xl`}>MET CS {course.number}</div>
                <div>
                    Grade:{" "}
                    <span class={tw`text-lg text-pink-300`}>
                        {course.grade}
                    </span>
                </div>
            </div>
            <div>
                {course.title} {!course.tech ? "" : "| "}
                <span class={tw`text-pink-300`}>{course.tech}</span>
            </div>
        </div>
    );
};

export default Course;
export { error, course };
