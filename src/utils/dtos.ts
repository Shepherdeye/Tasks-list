import { Status } from "@prisma/client";

export type CreateTaskDto = {
    title: string;
    description: string;
}


export type UpdateTaskDto = {
    title?: string;
    description?: string;
    status?: Status;
    id?: string;
}   