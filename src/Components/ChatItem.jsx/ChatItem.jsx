import React from 'react'

const ChatItem = ({autor,hora,texto}) => {
  return (
    < >
    <div>  
<h4>{autor} </h4><span>{hora} </span>
<p>{texto} </p>
</div>
    </>
  )
}

export default ChatItem