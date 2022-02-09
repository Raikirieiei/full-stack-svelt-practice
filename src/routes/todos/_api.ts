import type { RequestEvent } from '@sveltejs/kit'
let todos: Todo[] = [];

export const api = (request: RequestEvent) => {
    let body = {};
    let status = 500;

    switch (request.request.method.toUpperCase()){
        case "GET":
            
            break;
    
        default:
            break;
    }

}