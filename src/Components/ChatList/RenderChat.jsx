import React from 'react'
import ChatItem from '../ChatItem.jsx/ChatItem'
const handleSubmit=(evento)=>{
    evento.preventDefault()
}

const RenderChat = (props) => {

    

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
                    <button>Enviar mensaje</button>
            </form>
        </div>
    )
}

export default RenderChat

