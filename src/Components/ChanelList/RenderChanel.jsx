import React from 'react'

const RenderChanel = ({canal}) => {


    return (
        <div>
            {
                    canal.map((canal) => {
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
            }
        </div>
    )
}

export default RenderChanel