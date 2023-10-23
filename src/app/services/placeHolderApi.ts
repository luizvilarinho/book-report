import { HttpClient } from "./httpClient";

export class PlaceHolderApi extends HttpClient {
     //apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    //process.env.NEXT_PUBLIC_PLACEHOLDER || ''
     constructor(){
         super('http://localhost:3005/api/mock');
     }

    //  getData = async (): Promise<any> => {
    //     console.log("TESTE");
    // }
    
}


