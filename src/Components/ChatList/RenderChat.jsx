import React from 'react'

const RenderChat = (props) => {

    const MapMensajes = props.mensajes.map((mensaje) => {


        return (
            <div key={mensaje.id}><hr />
                <h4>{mensaje.author} {mensaje.hour} </h4>
                <span>{mensaje.text} </span>
            </div>
        )
    })


    return (
        <div>
            {MapMensajes}
        </div>
    )
}

export default RenderChat

