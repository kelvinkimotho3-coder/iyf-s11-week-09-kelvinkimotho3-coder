import { useState, useEffect } from 'react';

function ApiSearch() {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setUsers([]);
            return;
        }

        setLoading(true);
        const timeoutId = setTimeout(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            const filtered = data.filter(user =>
                user.name.toLowerCase().includes(query.toLowerCase())
            );
            setUsers(filtered);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search users..."
            />
            {loading && <p>Searching...</p>}
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default ApiSearch;