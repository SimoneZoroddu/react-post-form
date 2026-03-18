import { useState } from 'react'


export default function AppMain() {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [overt, setOvert] = useState('')



    return (
        <div className="container text-center">
            <h1 className="text-success">Aggiungi all Api i tuoi dati d'autore</h1>
            <form action="" /* onSubmit={} */>
                <input className="form-control" type="text" name="" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                <input className="form-control" type="text" name="" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <textarea className="form-control" type="text" name="" value={body} onChange={(e) => { setBody(e.target.value) }} />
                <select name="" id="" value={overt} onChange={(e) => { setOvert(e.target.value) }}>
                    <option value={true} >Pubblico</option>
                    <option value={false} >Non Pubblico</option>
                </select>
            </form>

        </div>
    )

}