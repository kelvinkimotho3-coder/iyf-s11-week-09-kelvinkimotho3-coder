import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data.slice(0, 15));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;
    if (posts.length === 0) return <p>No posts found.</p>;

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