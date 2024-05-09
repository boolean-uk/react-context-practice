import { useContext } from "react"
import { PostsContext } from "./PostsContext"

export default function PostList() {
    const { posts } = useContext(PostsContext)

    return (
        <>
            <h2>Here be posts!</h2>
            <hr/>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>
    )
}