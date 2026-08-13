import { useState, useEffect } from 'react';
import Tabs from './Tabs';

function UserProfile({ userId = 1 }) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAll() {
            setLoading(true);
            const [userRes, postsRes, todosRes] = await Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            ]);
            setUser(await userRes.json());
            setPosts(await postsRes.json());
            setTodos(await todosRes.json());
            setLoading(false);
        }
        fetchAll();
    }, [userId]);

    if (loading) return <p>Loading profile...</p>;

    const tabs = [
        { label: 'Info', content: <p>{user.name} — {user.email}</p> },
        { label: 'Posts', content: <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul> },
        { label: 'Todos', content: <ul>{todos.map(t => <li key={t.id}>{t.title} - {t.completed ? "✅" : "❌"}</li>)}</ul> }
    ];

    return (
        <div>
            <h1>{user.name}'s Profile</h1>
            <Tabs tabs={tabs} />
        </div>
    );
}

export default UserProfile;