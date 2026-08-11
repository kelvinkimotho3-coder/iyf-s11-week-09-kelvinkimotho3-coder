import useFetch from '../hooks/useFetch';

function PostListWithHook() {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                </article>
            ))}
        </div>
    );
}

export default PostListWithHook;