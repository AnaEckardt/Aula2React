export default function Filho(props){

    function responderPai(){
        props.respostaProPai("Oi consegui emprego")
    }
    return(
        <div>
            <h2>Componente Filho</h2>
            <span>Aviso: {props.msg}</span> <br/>
            <span>Nome: {props.dados.nome}</span> <br/> {/* objeto dados*/}
            <span>Idade: {props.dados.idade}</span> 

            <button onClick={()=>props.respostaProPai("Olá")}>Responder ao pai</button>
            {/*aeron function  ()=> props: usamos porque senão ele fica execurando o onclick direto*/} 
            <button onClick={responderPai}>Responde de novo</button>

        </div>
    )
}