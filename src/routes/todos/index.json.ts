import type { RequestHandler } from "@sveltejs/kit";
// import { api } from "./_api";

let todos: Todo[] = [];

export const get: RequestHandler = async ({ request }) => {
    return {
      status: 200,
      body: todos
    }
  }

export const post: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    
    todos.push({
        created_at: new Date(),
        text: formData.get('text') as string,
        done: false
    })
    
    return {
        status: 303,
        headers: {
            location: "/"
        },
        // body: formData.get('text') as string
    }
  }