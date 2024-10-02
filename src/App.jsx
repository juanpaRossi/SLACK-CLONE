import React from "react"
import RenderChat from "./Components/ChatList/RenderChat"
import { mensajes } from "./Components/ChatList/data"
import RenderChanel from "./Components/ChanelList/RenderChanel"
import { canales } from "./Components/ChanelList/dataChanel"
import CrearWorkspace from "./Components/WorkSpace/CrearWorkspace"

function App() {










  return (
    <>
<h1>Hola mundo </h1>
<RenderChat mensajes={mensajes} />

<RenderChanel canal={canales} />
<CrearWorkspace/>

    </>
  )
}

export default App
