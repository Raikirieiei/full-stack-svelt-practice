import type { RequestEvent } from '@sveltejs/kit'
let todos: Todo[] = [];

export const api = (request: RequestEvent, todo?: Todo) => {
    let body = {};
    let status = 500;

    switch (request.request.method.toUpperCase()){
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(todo);
            return{
                status:303,
                headers:{
                    location: "/"
                }
            }
        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.id)
            status: 200
           

        default:
            break;
    }

}