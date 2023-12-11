import { Link } from "react-router-dom"
export default function CardContato(props){

function excluir(){
    fetch(`http://localhost:8080/contatos/${props.contato.id}`,
    {
        method: 'DELETE'
    })
    .then(x => alert('contato excluido com sucesso'))
}

return (
   
    <div className="container">
         <hr/>
        <div className="card col-md-4">
            
            <div className="card-body">
                
                <h3 className="card-title">Contato</h3>

                <img src="https://th.bing.com/th/id/OIP.9SzZ-OPOxaD9w62OY4w16wHaF4?w=215&h=189&c=7&r=0&o=5&pid=1.7" 
                className="card-img-top" alt="..."></img>
                
                <div className="card-text" >
                    <span className="fw-bold">Nome: </span>
                    <span className="">{props.contato.nome}</span>
                </div>

                <div className="card-text" >
                    <span className="fw-bold">Email: </span>
                    <span>{props.contato.email}</span>
                </div>

                <div className="card-text" >
                    <span className="fw-bold">Fone: </span>
                    <span>{props.contato.fone}</span>
                </div>

                <div className="mt-3 d-flex justify-content-between">
                    <Link to={`/contatos/editar/${props.contato.id}`}><button className="btn btn-outline-primary">Editar</button></Link>
                    
                    <button
                        onClick={excluir}
                        className="btn btn-outline-primary"
                    >Excluir</button>
                </div>
               
            </div>
        </div>
    </div>
)
}
