import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();
                setPosts(data.slice(0, 15));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <article key={post.id}>
                    <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
                </article>
            ))}
        </div>
    );
}

export default Posts;