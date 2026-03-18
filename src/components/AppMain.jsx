import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AppMain() {
/* 
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [overt, setOvert] = useState(false) */
   
   
   
    
        const [object, setObject] = useState({
            author: '',
            title: '',
            body: '',
            public: false
        })
    
        function handleInput(e) {
        setObject({...object, [e.target.name] : e.target.type == 'checkbox' ? e.target.checked : e.target.value})
        }



    



    function postObject(e) {
        e.preventDefault()
        const logaxios = axios({
            method: 'post',
            url: 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',
            data: {object}
        });
        console.log(logaxios)
    }





    return (
        <div className="container text-center">
            <h1 className="text-success">Aggiungi all Api i tuoi dati d'autore</h1>
            <form action="" onSubmit={postObject} >
                <input className="form-control mb-3" type="text" name="author" value={object.author} onChange={handleInput} />
                <input className="form-control mb-3" type="text" name="title" value={object.title} onChange={handleInput} />
                <textarea className="form-control mb-3" type="text" name="body" value={object.body} onChange={handleInput} />
                <input type="checkbox" name="public" className='form-check-input' value={object.public} onChange={handleInput} /> Autore Publico? <hr />
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