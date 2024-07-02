import ClassProfessor from "@/Components/ClassProfessor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ClassroomProps, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ClassPage({ auth, classroom, professors, rooms }: PageProps<ClassroomProps>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Classroom Manager</h2>}
        >
            <Head title="Classroom" />
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 className="font-semibold text-3xl mt-6">Class {classroom.code.toUpperCase()}</h2>
                <ClassProfessor professors={professors} classroom={classroom} rooms={rooms} />
                <h3 className="text-lg px-4 mt-4">Room: <b>{classroom.room.name}</b></h3>
            </div>
        </Authenticated>
    );
}