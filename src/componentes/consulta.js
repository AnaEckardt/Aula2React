import { useEffect, useState } from 'react';
import CardContato from './cardContato';
 
export default function Consulta(){
    const [contatos, setContatos] = useState([])
  function Consultar(){
    fetch("http://localhost:8080/contatos")
    .then(data => data.json())
    .then(response => setContatos(response))
  }
    useEffect(Consultar,[])
 
    return(
        <div>
            <h2>Consulta de Contatos</h2>
           <div className='d-flex flex-wrap'>
            {
                contatos.map(ct => <CardContato contato={ct}/>)
            }
            </div>
        </div>
    )
 
}