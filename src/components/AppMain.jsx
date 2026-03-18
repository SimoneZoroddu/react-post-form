import { useEffect, useState } from 'react'


export default function AppMain() {

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [overt, setOvert] = useState(true)


    function postObject() {
        axios({
            method: 'post',
            url: 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',
            data: { title, author, body, public: overt }
        });

    }





    function addNewAuthor(e) {
        e.preventDefault()
        const newObject = { title, author, body, public: overt }
        console.log(newObject);

    }

    useEffect(() => {

    }, [])

    return (
        <div className="container text-center">
            <h1 className="text-success">Aggiungi all Api i tuoi dati d'autore</h1>
            <form action="" onSubmit={postObject} >
                <input className="form-control mb-3" type="text" name="" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                <input className="form-control mb-3" type="text" name="" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <textarea className="form-control mb-3" type="text" name="" value={body} onChange={(e) => { setBody(e.target.value) }} />
                <select className='form-select text-center mb-3' name="" id="" value={overt} onChange={(e) => { setOvert(e.target.value) }}>
                    <option value={true} >Pubblico</option>
                    <option value={false} >Non Pubblico</option>
                </select>
                <button className='btn btn-primary'>Aggiungi l'Autore</button>
            </form>

        </div>
    )

}