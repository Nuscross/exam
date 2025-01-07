import { useState } from "react";

const InputText = ({ addMessage }) => {

  const [message, setMessage] = useState();

  const sendMessage = () => {
    addMessage({message});
    setMessage("");
  }

  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex p-6 w-full">
        <input type="text" placeholder="Insert Message ..." onChange={(e) => setMessage(e.target.value)} value={message} className="p-3 w-[83%] rounded"></input>
        <button type="button" onClick={sendMessage} className="ml-auto p-2 text-white bg-blue-700 hover:bg-blue-500 rounded w-[15%]">Send</button>
      </div>
    </div>
  )

}

export default InputText;