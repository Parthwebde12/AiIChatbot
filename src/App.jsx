import React from 'react'
import styles from "./App.module.css"
import Chat from "./components/Chat/Chat"
import { useState } from 'react'
import { Controls } from './components/controls/controls'

function App  () {
  const [messages , setmessages] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img  className={styles.Logo} src="/chatbot.png" alt="" />
        <h1 className={styles.Title}>Ai Chatbot</h1>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
      <Controls />
    </div>
  )
}

const MESSAGES = [
  {
    role: 'User',
    content: 'Hello myself parth'
  },
  {
    role: 'Assistant',
    content: 'Hi Parth! How can I help you today?'
  },
  {
    role: 'User',
    content: 'How are you?'
  },
  {
    role: 'Assistant',
    content: 'I am doing great, thanks for asking!'
  }
]


export default App