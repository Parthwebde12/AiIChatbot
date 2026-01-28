import { useState } from "react"
import styles from "./App.module.css"
import {Chat} from "./components/Chat/chat"
function App() {
   const [Messages, setMessages]=useState(0);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
      <img className={styles.Logo} src="/chatbot.png" alt="" />
      <h2 className={styles.Title}>AI chatbot</h2>
</header>
<div className={styles.ChatContainer}>
  <Chat />
</div>
      </div>
  )
}

const MESSAGES ={
  role:'user',
  content:"AAnything ca n be done"
}

export default App
