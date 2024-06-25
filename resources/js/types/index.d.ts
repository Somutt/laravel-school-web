import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Professor {
    id: number;
    name: string;
    age?: number;
    classroom_id?: number;
}

export interface Student {
    id: number;
    name: string;
    registry: string;
    grade: string;
}

export interface Room {
    id: number;
    name: string;
    capacity: number;
    classroom_id?: number;
}

export interface Class {
    professor: Professor;
    room: Room;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type ProfessorType = {
    professor: Professor;
};

export type ProfessorsProps = {
    professors: Professor[];
};

export type StudentProps = {
    students: Student[];
};

export type StudentType = {
    student: Student;
};

export type RoomProps = {
    rooms: Room[];
};

export type RoomType = {
    room: Room;
};

export type ClassProps = {
    professors: Professor[];
    rooms: Room[];
    classes?: Class[];
};

export type ClassType = {
    class: Class;
};