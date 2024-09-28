import React from 'react'

const RenderChanel = (props) => {
    const mapCanales = props.chanel.map((canal) => {

        return (
            <div key={canal.id}><hr />
                <a>
                    {
                        canal.nombre
                    }
                </a><hr />
            </div>
        )
    })
    return (
        <div>
            {mapCanales}
        </div>
    )
}

export default RenderChanel