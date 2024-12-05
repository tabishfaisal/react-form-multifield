import style from '../component/styles/Main.module.css';
import PostCard from './PostCard.jsx';
import posts from './posts.js';
import { useState } from 'react';
function Main(){

    const filterPost = posts.filter((post)=> posts.published === true)

    const [title,setTitle] = useState('');
    function addPost(e){
        e.preventDefault()

        const newpost = {
            id: 6,
		    title,
            image: undefined,
		    content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		    tags: [],
		    published: true,
        }

        setTitle([...posts,newpost])
    }

    return (
        <>
        <form onSubmit={addPost} className={style.form} action="">
            <input onChange={(e)=>setTitle(e.target.value)} type="text" value={title} />
            <input className={style.submit} type="submit" value="add to list" />
        </form>
        <div className={style.container}>
            <div className={style.row}>
                <PostCard  posts={filterPost}/>
            </div>
        </div>

        </>

    )
}
export default Main;