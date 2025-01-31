import { z } from "zod"

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: "title should be string"
    }).min(1, { message: 'Title at least 2 charachter' }).max(200),
    describtion: z.string({
        required_error: 'describtion is required',
        invalid_type_error: "describtion should be string"
    }).min(1, { message: 'describtion at least 4 charachter' })
})