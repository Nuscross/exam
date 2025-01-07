import { useState } from "react";

const UserLogin = ({ setUser }) => {

  const [userName, setUserName] = useState();

  const handleUser = () => {
    if(!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
  }

  return (
    <section className="flex items-center justify-center flex-col h-screen p-6 bg-black/[0.9]">
      <div className="px-6 py-8 max-w-full w-[360px] border border-solid border-black rounded-lg bg-white">
        <h1 className="mb-5 w-full font-bold text-2xl text-center">Chat App</h1>
        <div>
          <input type="text" placeholder='Enter a Your Name' onChange={(e) => setUserName(e.target.value)} className="p-2 w-full text-sm border border-solid border-black rounded" />
        </div>
        <button type="button" onClick={handleUser} className="mt-3 p-2 w-full text-white bg-blue-700 rounded hover:bg-blue-500">Login</button>
      </div>
    </section>
  )

}

export default UserLogin;