import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';


export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/rafael-gama.png"
                hasBorder={false} 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Antunes</strong>
                            <time 
                                title="11 de Maio às 08:13h" 
                                dateTime="2025-04-22 21:01:30"
                            >
                                Cerca de 2h atrás
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment}  
                            title="Deletar comentário"
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                       {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}