// URL da API que você deseja acessar
export class HttpClient {
    apiUrl
    constructor(apiUrl:string){
       this.apiUrl = apiUrl
    }

    getData = async (): Promise<any> => {
        try {
            const response = await fetch(this.apiUrl);

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            const data = await response.json();
            //console.log("log",data);
            return data;
        } catch (error) {
            console.error('Erro:', error);
            throw error; 
        }
    }


}


