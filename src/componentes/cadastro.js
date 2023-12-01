import { useState } from 'react'
import MostrarContato from './mostrarContato'
export default function Cadastro(){
    const[nome, setNome] = useState('') //hook
    const[email, setEmail] = useState('')
    const[fone, setFone] = useState('')
    return(
        <div className="container">
            <h2 className="text-center">Novo contato</h2>
            <label className="form-label">Informe nome</label>                     {/*associamos o hook ao value */}
            <input className="form-control" type="text" placeholder="Informe nome" value={nome} 
            onChange={txt => setNome(txt.target.value)}/>

            <label className="form-label">Informe email</label>
            <input className="form-control" type="text" placeholder="Informe nome"value={email} 
            onChange={txt => setEmail(txt.target.value)}/>

            <label className="form-label">Informe telefone</label>
            <input className="form-control" type="text" placeholder="Informe nome"value={fone} 
            onChange={txt => setFone(txt.target.value)}/>

            <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button><hr/>
            </div>

            <MostrarContato
                contato={{nome, email, fone}}
            />
                

            
        </div>
    )
}