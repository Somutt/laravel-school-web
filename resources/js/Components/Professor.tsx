import { ProfessorType } from "@/types";

export default function Professor({ name, age }: ProfessorType) {
    return (
        <li className="flex p-4 flex-col max-w-2xl mx-auto" >
             <div className="flex justify-start items-center">
                <span className='text-gray-800'>{name}</span>
                <span className='ml-2 text-gray-600'>{ age }</span>
            </div>
        </li>
    );
}
