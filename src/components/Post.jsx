import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlist } from "../store/Post-list-store";
const Post = ({ post }) => {
    const { deletePost } = useContext(Postlist);

    return (
        <>
            <div className="card post-card" style={{ width: "30rem" }}>

                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>

                    {/* Render reactions properly */}
                    <div className="reactions">
                        {/* If reactions is an object, access its properties */}
                        {typeof post.reactions === 'object' ? (
                            <>
                                <span>Likes: {post.reactions.likes || 0}</span>
                                <span>Dislikes: {post.reactions.dislikes || 0}</span>
                            </>
                        ) : (
                            // If reactions is a number (from dummyjson API)
                            <span>Reactions: {post.reactions}</span>
                        )}
                    </div>

                    {/* Render tags as an array */}
                    <div className="tags">
                        {Array.isArray(post.tags) && post.tags.map((tag, index) => (
                            <span key={index} className="badge bg-primary me-1">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => { deletePost(post.id) }}>
                        <MdDelete />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </div>
        </>
    );
}
export default Post