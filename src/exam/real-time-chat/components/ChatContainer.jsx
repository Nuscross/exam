import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";

const ChatContainer = () => {

  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [chats, setChats] = useState([]);

  const socketio = socketIOClient("http://localhost:3001");

  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });
  })

  const addMessage = (chat) => {
    const newChat = {
      ...chat,
      username: localStorage.getItem("user"),
    };
    setChats([...chats, newChat]);
    sendToSocket([...chats, newChat]);
  }

  const sendToSocket  = (chat) => {
    socketio.emit("chat", chat);
  }

  const Logout = () => {
    localStorage.removeItem("user");
    setUser("");
  }

  return (
    <>
      { user ?
        <section className="flex items-center flex-col h-screen bg-black/[0.9]">
          <div className="flex w-full justify-between p-6 text-white">
            <h4>Username: {user}</h4>
            <div onClick={Logout} className="cursor-pointer">Logout</div>
          </div>
          <div className="p-6 w-full border-t-2 border-gray-700">
            <ChatLists chats={chats} />
            <InputText addMessage={addMessage} />
          </div>
        </section>
        :
        <UserLogin setUser={setUser} />
      }
    </>
  )

}

export default ChatContainer;