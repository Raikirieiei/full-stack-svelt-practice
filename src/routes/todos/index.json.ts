import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

let todos: Todo[] = [];

export const get = async ( request ) => {
    return api(request)

  }

export const post = async ( request ) => {
    const formData = await request.request.formData();
    
    return api(request, {
      uid: `${Date.now()}`,
      created_at: new Date(),
      text: formData.get('text') as string,
      done: false
    })
  }