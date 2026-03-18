import { useState } from 'react'
import axios from 'axios'
const oggetto = {
    author: '',
    title: '',
    body: '',
    public: false
}

export default function AppMain() {

    const [object, setObject] = useState(oggetto)

    function handleInput(e) {
        setObject({ ...object, [e.target.name]:  e.target.checked || e.target.value })
    }


    function postObject(e) {
        e.preventDefault()
        axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', object)
            .then((res) => {
                setObject(oggetto)
                console.log(res.data)
                alert('Dati inviati al server')
            }
            ).catch(error => {
                alert('Something go wrong', error)
            })
    }


    return (
        <div className="container text-center">
            <h1 className="text-success">Aggiungi all Api i tuoi dati d'autore e film</h1>
            <form action="" onSubmit={postObject}>
                <input placeholder='Nome Autore' className="form-control mb-3" type="text" name="author" value={object.author} onChange={handleInput} />
                <input placeholder='Titolo film' className="form-control mb-3" type="text" name="title" value={object.title} onChange={handleInput} />
                <textarea placeholder='Descrizione' className="form-control mb-3" type="text" name="body" value={object.body} onChange={handleInput} />
                <input type="checkbox" name="public" className='form-check-input form-switch' value={object.public} onChange={handleInput} /> Autore Publico? <hr />
                <button className='btn btn-primary'>Aggiungi l'Autore</button>
            </form>
        </div>
    )

}




/* 
                <select className='form-select text-center mb-3' name="overt" id="" value={overt} onChange={(e) => { setOvert(e.target.value) }}>
                    <option value={true} >Pubblico</option>
                    <option value={false} >Non Pubblico</option>
                </select> */