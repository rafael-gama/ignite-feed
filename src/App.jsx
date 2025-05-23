import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import  './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafael-gama.png',
      name: 'Rafael Antunes',
      role: 'Software Engineer'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-04-26 20:16:00'), 
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-04-10 20:00:00'), 
  },
]

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

      
    </>
  )
}

export default App
