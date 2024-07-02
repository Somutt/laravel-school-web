import AddClass from "@/Components/AddClass";
import Classroom from "@/Components/Classroom";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ClassroomsProps, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ClassesPage({ auth, professors, rooms, classes }: PageProps<ClassroomsProps>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Classes Manager</h2>}
        >
            <Head title="Classes" />
            {
            (professors.length && rooms.length) > 0 
                && 
            <AddClass professors={professors} rooms={rooms} />
            }
            <h2 className="font-semibold text-3xl px-4 mt-6 mb-1 md:text-center">Classes</h2>
                <ul className="flex flex-col justify-center items-center bg-white w-full
                md:max-w-4xl md:mx-auto md:rounded-md"
                >
                    {classes ? 
                        classes.map( (c) => <Classroom key={c.id} classroom={c} /> )
                    : 
                    ''
                    }
                </ul>
        </Authenticated>
    );
}