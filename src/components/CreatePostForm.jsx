import { useState, useContext } from "react"
import { PostsContext } from "./PostsContext"

export default function CreatePostForm() {
    const [postTitle, setPostTitle] = useState('')
    const { posts, setPosts } = useContext(PostsContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const postToCreate = {
            id: posts.length + 1,
            title: postTitle
        }

        setPosts([postToCreate, ...posts])
        setPostTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="Title"/>
            <button type="submit">Create post</button>
        </form>
    )
}