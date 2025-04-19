import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import  './global.css'


function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Rafael Antunes'
            content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nihil itaque earum, libero odit commodi accusamus id labore, amet facilis ab iusto ut, pariatur deserunt molestias aliquid quaerat sed exercitationem!'
          />
        </main>
      </div>

      
    </>
  )
}

export default App
