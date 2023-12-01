import Filho from "./filho";
//linha 11 chamada do Componente filho, linha 12: chamada direta, linha 13: chamada indireta.
export default function Pai(texto){  
function respostaFilho(texto){
    alert(texto)
}

    return(
        <div>
            <h2>Componente Pai</h2>
            <Filho 
                msg="olá filho, suspendi a mesada!" 
                dados={{nome:'maria',idade:50}}
                respostaProPai={respostaFilho}
                />
        </div>
    )
}