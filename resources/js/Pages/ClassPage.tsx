import AddClassroomStudent from "@/Components/AddClassroomStudent";
import ClassroomEdit from "@/Components/ClassroomEdit";
import ClassroomStudent from "@/Components/ClassroomStudent";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ClassroomProps, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ClassPage({ auth, classroom, professors, rooms, students }: PageProps<ClassroomProps>) {
    console.log(classroom);

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-red-800 leading-tight">Classroom Manager</h2>}
        >
            <Head title="Classroom" />
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 className="font-semibold text-3xl mt-6">Class {classroom.code.toUpperCase()}</h2>
                <ClassroomEdit professors={professors} classroom={classroom} rooms={rooms} />
            </div>
            {students.length > 0 ? 
                <AddClassroomStudent students={students} classroom={classroom} />
            :
                ''
            }
            <h2 className="font-semibold text-3xl px-4 mt-6 mb-1 md:text-center">Students</h2>
            <ul className="flex flex-col justify-center items-center bg-white w-full
                md:max-w-4xl md:mx-auto md:rounded-md"
            >
                {classroom.students ?
                    classroom.students.map( (cs) => <ClassroomStudent student={cs} classroom={classroom} /> )
                :
                    ''
                }
            </ul>
        </Authenticated>
    );
}