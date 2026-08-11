import { useState, useEffect } from 'react';

function PostCardSimple({ post }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
        </article>
    );
}

function FetchPostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data.slice(0, 10));

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) return <div className="loading">Loading posts...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCardSimple key={post.id} post={post} />
            ))}
        </div>
    );
}

export default FetchPostList;