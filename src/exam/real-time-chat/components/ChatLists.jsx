const ChatLists = ({ chats }) => {

  const user = localStorage.getItem("user");

  const SenderChat = ({message, username}) => {
    return (
      <div className="flex justify-start gap-3 text-white">
        <strong>{username}</strong> 
        <div className="p-3 bg-slate-800 rounded-lg">{message}</div>
      </div>
    )
  }

  const ReceiverChat = ({message, username}) => {
    return (
      <div className="flex justify-end gap-3 text-white">
        <strong>{username}</strong>
        <div className="p-3 bg-slate-800 rounded-lg">{message}</div>
      </div>
    )
   }
    
  return (
    <div className="flex flex-col gap-6 w-full">
      { chats.map((chat, index) => {
        if(chat.username === user) {
          return <SenderChat key={index} message={chat.message} username={chat.username} />
        }
        else {
          return <ReceiverChat key={index} message={chat.message} username={chat.username} />
        }
      })}
    </div>
  )

}

export default ChatLists;