import React from "react"
import RenderChat from "./Components/ChatList/RenderChat"
import { mensajes } from "./Components/ChatList/data"
import RenderChanel from "./Components/ChanelList/RenderChanel"
import { canales } from "./Components/ChanelList/dataChanel"

function App() {










  return (
    <>
<h1>Hola mundo </h1>
<RenderChat mensajes={mensajes} />

<RenderChanel canal={canales} />

    </>
  )
}

export default App
