export default function MostrarContato(props) {
    return (
       
        <div className="conatiner">
             <hr/>
            <div className="card col-md-4">
               
                <div className="card-body">
                   
                    <h3 className="card-title">Contato</h3>
 
                    <img src="https://th.bing.com/th/id/OIP.CQTTl9atnl0UbcuQPHtv8gHaK2?w=206&h=302&c=7&r=0&o=5&pid=1.7"
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
 
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}