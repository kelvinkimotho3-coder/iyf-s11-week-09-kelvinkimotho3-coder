import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';
import Input from '../components/shared/Input/Input';

function Posts({ localPosts = [] }) {
    const [apiPosts, setApiPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setApiPosts(data.slice(0, 15));
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

    const allPosts = [...localPosts, ...apiPosts];
    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>All Posts</h1>
            <Link to="/create">+ Create New Post</Link>

            <Input
                name="search"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredPosts.length === 0 ? (
                <p>No posts match your search.</p>
            ) : (
                filteredPosts.map(post => (
                    <article key={post.id}>
                        <h3>
                            {post.body ? (
                                <span>{post.title}</span>
                            ) : (
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            )}
                        </h3>
                    </article>
                ))
            )}
        </div>
    );
}

export default Posts;