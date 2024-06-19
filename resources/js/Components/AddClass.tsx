import { FormEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";
import { ClassProps } from "@/types";
import InputLabel from "./InputLabel";

export default function AddClass({ professors, students, rooms }: ClassProps) {
    const submitClass: FormEventHandler = (e) => {
        e.preventDefault();

        console.log('class added')
    }

    return (
        <form onSubmit={submitClass}>
            <InputLabel htmlFor="professor" value="Select Professor" />
            <PrimaryButton>Add Class</PrimaryButton>
        </form>
    );
}