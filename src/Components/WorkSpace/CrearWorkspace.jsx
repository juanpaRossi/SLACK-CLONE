import React, { useState } from 'react'

const CrearWorkspace = () => {
    const [error,setError]=useState({text:'',isError:false})
    const handleSubmit = (evento) => {
        evento.preventDefault()
        const Formulario = new FormData(evento.target)
        const MensajeNUevo = Formulario.get('mensaje')
        console.log(MensajeNUevo)
        if(!MensajeNUevo){
            setError({isError: true, text:'no has escrito'})
        }
        else{
            setError ({isError:false, text:''} )}


    }





    return (
        <div>
            <h2>Crear Workspace</h2>

            <form onSubmit={handleSubmit} className='formulario'>



                <label htmlFor='w-space-name'>Nombre del Workspace</label><br />
                <input id='w-space-name' placeholder='Escribe el nombre del Worspace' name='mensaje' />
                {error.isError && <span>{error.text} </span>}
                <br /><br />
                <label htmlFor='canal-name'>Nombre del Canal</label><br />
                <input id='canal-name' placeholder='Escribe el nombre del canal' name='mensaje' />
                {error.isError && <span>{error.text} </span>}
                <br /><br />
                <button>Crear</button>

            </form>
        </div>
    )
}

export default CrearWorkspace