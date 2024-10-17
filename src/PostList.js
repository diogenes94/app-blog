import Post from "./Post";
import { DataView } from 'primereact/dataview';

function PostList({ posts, users, comments }) {
    const itemTemplate = (post) => {
        const user = users.find(user => user.id === post.userId);
        const commentsPost = comments.filter(c => c.postId === post.id);
        return <Post post={post} user={user} comments={commentsPost} />
    }

    return (
        <DataView value={posts} itemTemplate={itemTemplate}
            layout="list" paginator rows={10} />
    )
}

export default PostList;