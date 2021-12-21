import { stock } from "../data/stock"


export const pedirDatos = () =>{
    return new Promise ((resolvePath, reject)=>{
            setTimeout(() => {
            resolvePath(stock)
         }, 3000)
    })
}