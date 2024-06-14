import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type ProfessorType = {
    id?: number;
    name: string;
    age?: number;
    created_at?: Date;
    updated_at?: Date;
}
