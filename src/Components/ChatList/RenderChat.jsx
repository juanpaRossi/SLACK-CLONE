import React, { useState } from 'react'
import ChatItem from '../ChatItem.jsx/ChatItem'
import { mensajes } from './data'


const RenderChat = (props) => {
    const [error,setError]=useState({text:'',isError:false})

    const handleSubmit=(evento)=>{
    
        //prevenir eventos. en este caso que se recargue la pantalla
        evento.preventDefault()
        //capturar valores del formulario, se hace con target
        // new FormData= nos permite obtener los datos del formulario
        const formulario= new FormData(evento.target)
        //con el dato get puedo traer la informacion que necesito de el form, y con el name que le di al input me traera el mensaje enviado
    
        const mensaje= formulario.get('mensaje')
        console.log(mensaje)
        if(!mensaje){
            setError({isError: true, text:'no has escrito'})
        }
        else{
            setError ({isError:false, text:''} )}
    
    }

    

    const MapMensajes = props.mensajes.map((mensaje) => {


        return (
            <div>
                <div>
                    <ChatItem key={mensaje.id}
                        autor={mensaje.author} hora={mensaje.hour}
                        texto={mensaje.text}
                    />

                </div>
                


            </div>


        )
    })


    return (
        <div>
            <div>
            {MapMensajes}

            </div>
            <form onSubmit={handleSubmit}>
                    <input placeholder='Escriba algo' name='mensaje' />
                    {error.isError && <span>{error.text} </span>}
                    <button>Enviar mensaje</button>
            </form>
        </div>
    )
}

export default RenderChat

