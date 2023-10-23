import { NextResponse } from "next/server";

let mockData = {
    "fichamentos": [
      {
        "id": 1,
        
        "livro": {
          "id": 1,
          "nome": "O Senhor dos Anéis",
          "dataPublicacao": "01/01/2000",
          "autor": "J. R. R. Tolkien",
          "genero": "Fantasia",
          "editora": "Saraiva",
          "palavraChave": "Literatura",
          "sessoes": [
            {
              "id": 1,
              "descricao": "sessao 1"
            },
            {
              "id": 2,
              "descricao": "sessao 2"
            },
            {
              "id": 3,
              "descricao": "sessao 3"
            }
          ],
          
        },
        "fichas": [
          {
            "id": 1,
            "pagina": 32,
            "citacao": "Muitos que vivem merecem a morte. E alguns que morrem merecem viver. Você pode dar-lhes a vida? Então não seja tão ávido para julgar e condenar alguém a morte. Pois mesmo os muitos sábios não conseguem ver os dois lados.",
            "anotacao": "essa é a anotação da ficha",
            "sessao": {id:1, descricao:"sessao 1"},
            "create_at": "01/01/2000",
            "update_at": "01/01/2000"
          },
          {
            "id": 2,
            "pagina": 45,
            "citacao": "Nada é mais fácil do que render-se. Nada é mais difícil do que escolher.",
            "anotacao": "outra anotação interessante",
            "sessao":  {id:1, descricao:"sessao 1"},
            "create_at": "01/02/2000",
            "update_at": "01/02/2000"
          },
          {
            "id": 3,
            "pagina": 78,
            "citacao": "O mundo é um livro e quem não viaja lê apenas uma página.",
            "anotacao": "terceira anotação aqui",
            "sessao":  {id:3, descricao:"sessao 3"},
            "create_at": "01/03/2000",
            "update_at": "01/03/2000"
          }
        ]
      },
      {
        "id": 2,
        
        "livro": {
          "id": 2,
          "nome": "Dom Quixote",
          "dataPublicacao": "15/12/1605",
          "autor": "Miguel de Cervantes",
          "genero": "Romance",
          "editora": "Gutenberg",
          "palavraChave": "Clássico",
          "sessoes": [
            {
              "id": 1,
              "descricao": "sessao 1"
            },
            {
              "id": 2,
              "descricao": "sessao 2"
            }
          ],
        },
        "fichas": [
          {
            "id": 1,
            "pagina": 50,
            "citacao": "No meio do caminho da nossa vida, eu me encontrei em uma floresta escura.",
            "anotacao": "Primeira anotação de Dom Quixote.",
            "sessao":  {id:1, descricao:"sessao 1"},
            "create_at": "10/01/1605",
            "update_at": "12/01/1605"
          },
          {
            "id": 2,
            "pagina": 100,
            "citacao": "O Cavaleiro da Triste Figura ataca novamente!",
            "anotacao": "Segunda anotação de Dom Quixote.",
            "sessao":  {id:2, descricao:"sessao 2"},
            "create_at": "15/01/1605",
            "update_at": "17/01/1605"
          }
        ]
      }
    ]
  }
  
export async function GET(request: Request) {
    //let params = new URL(request.url).searchParams.get("name")
    return NextResponse.json({
        success: true,
        data:mockData
    })
}