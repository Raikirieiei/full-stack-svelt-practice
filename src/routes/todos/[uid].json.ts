import type { RequestHandler } from "@sveltejs/kit";

export const get = ({params, request}) =>{
    return{
        status: 200,
        body: params.uid
    }
}